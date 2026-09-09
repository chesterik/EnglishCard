from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
import certifi
import json
import logging
import os
import socket
import ssl
import time


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = PROJECT_ROOT / "data" / "sets.json"
STATE_FILE = PROJECT_ROOT / "data" / "bot_state.json"
CONFIG_FILE = PROJECT_ROOT / "bot" / "config.json"
LOG_FILE = PROJECT_ROOT / "logs" / "bot.log"

DEFAULT_SITE_URL = "http://192.168.1.25:3000"
DEFAULT_CHECK_SECONDS = 60
TELEGRAM_MESSAGE_LIMIT = 3900
LOCK_HOST = "127.0.0.1"
LOCK_PORT = 39461
TELEGRAM_LONG_POLL_SECONDS = 25
SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
REVIEW_INTERVALS = {
    "again": 60,
    "hard": 6 * 60,
    "good": 10 * 60,
    "easy": 4 * 24 * 60 * 60,
}
BOT_COMMANDS = [
    {"command": "start", "description": "Включить уведомления"},
    {"command": "stop", "description": "Отключить уведомления"},
    {"command": "review", "description": "Начать повторение слов"},
    {"command": "due", "description": "Показать все слова для повторения"},
    {"command": "status", "description": "Статистика повторения"},
    {"command": "settings", "description": "Настройки бота"},
    {"command": "help", "description": "Как пользоваться ботом"},
    {"command": "id", "description": "Показать Telegram ID"},
]


def setup_logging():
    LOG_FILE.parent.mkdir(exist_ok=True)
    logging.basicConfig(
        filename=LOG_FILE,
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        encoding="utf-8",
    )


def parse_allowed_ids(value):
    if isinstance(value, list):
        raw = value
    elif isinstance(value, str):
        raw = [item.strip() for item in value.split(",")]
    else:
        raw = []

    allowed = set()
    for item in raw:
        try:
            allowed.add(int(item))
        except (TypeError, ValueError):
            continue
    return allowed


def invalid_allowed_id_values(value):
    if isinstance(value, list):
        raw = value
    elif isinstance(value, str):
        raw = [item.strip() for item in value.split(",")]
    else:
        raw = []
    invalid = []
    for item in raw:
        try:
            int(item)
        except (TypeError, ValueError):
            if str(item).strip():
                invalid.append(str(item))
    return invalid


def load_config():
    config = {}
    if CONFIG_FILE.exists():
        try:
            config = json.loads(CONFIG_FILE.read_text(encoding="utf-8-sig"))
        except json.JSONDecodeError:
            logging.exception("bad bot config")

    token = os.environ.get("ENGLISHCARD_BOT_TOKEN") or config.get("token") or ""
    if token == "PASTE_TELEGRAM_BOT_TOKEN_HERE":
        token = ""

    allowed_from_env = os.environ.get("ENGLISHCARD_ALLOWED_USER_IDS", "")
    allowed_source = allowed_from_env or config.get("allowed_user_ids")
    invalid_allowed = invalid_allowed_id_values(allowed_source)
    if invalid_allowed:
        logging.warning("ignored invalid allowed_user_ids values: %s", invalid_allowed)
        print("allowed_user_ids must be numeric Telegram user ids, not usernames.")
        print("Send /id to the bot and put that number into bot/config.json.")
    allowed_user_ids = parse_allowed_ids(allowed_source)
    return {
        "token": token,
        "allowed_user_ids": allowed_user_ids,
        "check_seconds": int(config.get("check_seconds") or DEFAULT_CHECK_SECONDS),
        "verify_ssl": bool(config.get("verify_ssl", True)),
        "site_url": (
            os.environ.get("ENGLISHCARD_SITE_URL")
            or config.get("site_url")
            or DEFAULT_SITE_URL
        ).rstrip("/"),
    }


def configure_ssl(verify_ssl):
    global SSL_CONTEXT
    if verify_ssl:
        SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
    else:
        SSL_CONTEXT = ssl._create_unverified_context()
        logging.warning("telegram ssl verification is disabled")


def load_state():
    if not STATE_FILE.exists():
        return {"chat_ids": [], "offset": 0, "last_signature": "", "last_sent_at": 0}
    try:
        state = json.loads(STATE_FILE.read_text(encoding="utf-8-sig"))
    except json.JSONDecodeError:
        logging.exception("bad bot state")
        state = {}
    state.setdefault("chat_ids", [])
    state.setdefault("offset", 0)
    state.setdefault("last_signature", "")
    state.setdefault("last_sent_at", 0)
    return state


def save_state(state):
    STATE_FILE.parent.mkdir(exist_ok=True)
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


def telegram(token, method, payload=None):
    data = None
    headers = {}
    if payload is not None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        headers["Content-Type"] = "application/json; charset=utf-8"
    request = Request(f"https://api.telegram.org/bot{token}/{method}", data=data, headers=headers)
    with urlopen(request, timeout=35, context=SSL_CONTEXT) as response:
        return json.loads(response.read().decode("utf-8"))


def send_message(token, chat_id, text, reply_markup=None):
    payload = {
        "chat_id": chat_id,
        "text": text,
        "disable_web_page_preview": True,
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
    return telegram(token, "sendMessage", payload)


def split_message(text, limit=TELEGRAM_MESSAGE_LIMIT):
    chunks = []
    current = ""
    for line in text.splitlines(keepends=True):
        while len(line) > limit:
            if current:
                chunks.append(current.rstrip())
                current = ""
            chunks.append(line[:limit].rstrip())
            line = line[limit:]
        if current and len(current) + len(line) > limit:
            chunks.append(current.rstrip())
            current = ""
        current += line
    if current.strip():
        chunks.append(current.rstrip())
    return chunks or [""]


def send_long_message(token, chat_id, text, reply_markup=None):
    chunks = split_message(text)
    result = None
    for index, chunk in enumerate(chunks):
        markup = reply_markup if index == len(chunks) - 1 else None
        result = send_message(token, chat_id, chunk, markup)
    return result


def setup_bot_menu(token):
    telegram(token, "setMyCommands", {"commands": BOT_COMMANDS})
    telegram(token, "setChatMenuButton", {"menu_button": {"type": "commands"}})


def answer_callback(token, callback_id, text=""):
    payload = {"callback_query_id": callback_id}
    if text:
        payload["text"] = text
    return telegram(token, "answerCallbackQuery", payload)


def get_updates(token, offset):
    query = urlencode({"timeout": TELEGRAM_LONG_POLL_SECONDS, "offset": offset})
    return telegram(token, f"getUpdates?{query}")["result"]


def get_me(token):
    return telegram(token, "getMe")["result"]


def parse_iso(value):
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def iso_now_plus(seconds):
    return (datetime.now(timezone.utc) + timedelta(seconds=seconds)).isoformat().replace("+00:00", "Z")


def now_iso():
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def read_store():
    if not DATA_FILE.exists():
        return {"sets": []}
    try:
        data = json.loads(DATA_FILE.read_text(encoding="utf-8-sig"))
    except json.JSONDecodeError:
        logging.exception("bad sets file")
        return {"sets": []}
    return {"sets": data.get("sets", []) if isinstance(data.get("sets"), list) else []}


def write_store(store):
    DATA_FILE.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")


def normalize_card(card):
    card.setdefault("dueAt", "")
    card.setdefault("lastReviewedAt", "")
    card.setdefault("intervalMs", 0)
    card.setdefault("reviewCount", 0)
    card.setdefault("stats", {"again": 0, "hard": 0, "good": 0, "easy": 0})
    card.setdefault("history", [])
    for grade in REVIEW_INTERVALS:
        card["stats"].setdefault(grade, 0)
    return card


def due_cards():
    now = datetime.now(timezone.utc)
    due = []
    store = read_store()
    for set_index, card_set in enumerate(store["sets"]):
        set_id = str(card_set.get("id", ""))
        set_title = str(card_set.get("title", "Untitled"))
        for card_index, card in enumerate(card_set.get("cards", [])):
            due_at = parse_iso(str(card.get("dueAt", "")))
            term = str(card.get("term", "")).strip()
            definition = str(card.get("definition", "")).strip()
            if not due_at or due_at > now or not term or not definition:
                continue
            due.append({
                "set_index": set_index,
                "card_index": card_index,
                "set_id": set_id,
                "set_title": set_title,
                "term": term,
                "definition": definition,
                "due_at": due_at,
            })
    return sorted(due, key=lambda item: item["due_at"])


def future_count():
    now = datetime.now(timezone.utc)
    count = 0
    for card_set in read_store()["sets"]:
        for card in card_set.get("cards", []):
            due_at = parse_iso(str(card.get("dueAt", "")))
            if due_at and due_at > now:
                count += 1
    return count


def due_signature(cards):
    return "|".join(f"{card['set_id']}:{card['term']}:{card['due_at'].isoformat()}" for card in cards)


def is_allowed(user_id, config):
    return int(user_id) in config["allowed_user_ids"]


def setup_warning(user_id):
    return "\n".join([
        f"Your Telegram user id: {user_id}",
        "",
        "Add it to bot/config.json:",
        f'"allowed_user_ids": [{user_id}]',
        "",
        "Until then I will not show cards or accept answers.",
    ])


def add_chat(state, chat_id):
    if chat_id not in state["chat_ids"]:
        state["chat_ids"].append(chat_id)


def remove_chat(state, chat_id):
    state["chat_ids"] = [saved_id for saved_id in state["chat_ids"] if saved_id != chat_id]


def prune_chat_ids(state, config):
    allowed = config["allowed_user_ids"]
    before = list(state["chat_ids"])
    state["chat_ids"] = [chat_id for chat_id in before if int(chat_id) in allowed]
    if state["chat_ids"] != before:
        removed = sorted(set(before) - set(state["chat_ids"]))
        logging.info("removed unauthorized chat_ids from state: %s", removed)
        save_state(state)


def review_keyboard(card, answer_visible=False):
    set_index = card["set_index"]
    card_index = card["card_index"]
    if not answer_visible:
        return {
            "inline_keyboard": [[
                {"text": "Show answer", "callback_data": f"show|{set_index}|{card_index}"}
            ]]
        }
    return {
        "inline_keyboard": [[
            {"text": "Again 1m", "callback_data": f"grade|{set_index}|{card_index}|again"},
            {"text": "Hard 6m", "callback_data": f"grade|{set_index}|{card_index}|hard"},
        ], [
            {"text": "Good 10m", "callback_data": f"grade|{set_index}|{card_index}|good"},
            {"text": "Easy 4d", "callback_data": f"grade|{set_index}|{card_index}|easy"},
        ]]
    }


def format_due_message(cards, site_url):
    if not cards:
        return "Пока нет слов, которые пора повторять."

    lines = [f"Пора повторить слова: {len(cards)}"]
    current_set = None
    for card in cards:
        if card["set_title"] != current_set:
            current_set = card["set_title"]
            lines.append("")
            lines.append(current_set)
        lines.append(f"- {card['term']} — {card['definition']}")

    first = cards[0]
    lines.append("")
    lines.append(f"Открыть сет: {site_url}/study.html?set={first['set_id']}")
    return "\n".join(lines)


def format_review_prompt(card, answer_visible=False):
    lines = [
        f"Set: {card['set_title']}",
        "",
        f"Word: {card['term']}",
    ]
    if answer_visible:
        lines.extend(["", f"Answer: {card['definition']}", "", "How well did you remember it?"])
    else:
        lines.append("Tap Show answer when ready.")
    return "\n".join(lines)


def status_message():
    cards = due_cards()
    return f"Сейчас к повторению: {len(cards)}\nЗапланировано позже: {future_count()}"


def settings_message(config):
    return "\n".join([
        "Настройки EnglishCard",
        "",
        "Получение сообщений: Long polling",
        f"Проверка новых слов: каждые {config['check_seconds']} сек.",
        f"Разрешенных пользователей: {len(config['allowed_user_ids'])}",
        f"Адрес сайта: {config['site_url']}",
        "",
        "Настройки изменяются в bot/config.json.",
    ])


def send_next_review(token, chat_id):
    cards = due_cards()
    if not cards:
        send_message(token, chat_id, "Все due-слова повторены. Хорошо.")
        return
    card = cards[0]
    send_message(token, chat_id, format_review_prompt(card), review_keyboard(card))


def grade_card(set_index, card_index, grade):
    if grade not in REVIEW_INTERVALS:
        return None
    store = read_store()
    try:
        card_set = store["sets"][set_index]
        card = normalize_card(card_set["cards"][card_index])
    except (IndexError, KeyError, TypeError):
        return None

    reviewed_at = now_iso()
    interval_seconds = REVIEW_INTERVALS[grade]
    next_due = iso_now_plus(interval_seconds)
    card["intervalMs"] = interval_seconds * 1000
    card["dueAt"] = next_due
    card["lastReviewedAt"] = reviewed_at
    card["reviewCount"] = int(card.get("reviewCount") or 0) + 1
    card["stats"][grade] = int(card["stats"].get(grade) or 0) + 1
    card["history"].append({"grade": grade, "at": reviewed_at, "nextDueAt": next_due})
    card["history"] = card["history"][-300:]
    write_store(store)
    return {
        "term": str(card.get("term", "")),
        "grade": grade,
        "next_due": next_due,
    }


def handle_command(token, state, config, message):
    chat_id = message["chat"]["id"]
    user_id = message.get("from", {}).get("id", chat_id)
    text = (message.get("text") or "").strip().lower()

    if text.startswith("/id"):
        send_message(token, chat_id, setup_warning(user_id))
        return

    if not is_allowed(user_id, config):
        logging.warning("blocked unauthorized message from user_id=%s chat_id=%s", user_id, chat_id)
        if not config["allowed_user_ids"]:
            send_message(token, chat_id, setup_warning(user_id))
        return

    if text.startswith("/start"):
        add_chat(state, chat_id)
        state["last_signature"] = ""
        send_message(token, chat_id, "\n".join([
            "Уведомления включены.",
            "Бот сообщит, когда появятся слова для повторения.",
            "",
            "Чтобы отключить автоматические сообщения: /stop",
        ]))
    elif text.startswith("/stop"):
        remove_chat(state, chat_id)
        send_message(token, chat_id, "\n".join([
            "Уведомления отключены.",
            "Ручные команды /review, /due и /status продолжают работать.",
            "Включить уведомления снова: /start",
        ]))
    elif text.startswith("/help"):
        send_message(token, chat_id, "\n".join([
            "EnglishCard bot.",
            "",
            "/start - включить автоматические уведомления",
            "/stop - отключить автоматические уведомления",
            "/review - отвечать на слова кнопками",
            "/due - показать все слова, которые пора повторить",
            "/status - короткая статистика",
            "/settings - настройки бота",
            "/id - показать твой Telegram user id",
            "/forget - очистить сохраненные chat ids",
        ]))
    elif text.startswith("/review"):
        send_next_review(token, chat_id)
    elif text.startswith("/due"):
        send_long_message(token, chat_id, format_due_message(due_cards(), config["site_url"]))
    elif text.startswith("/status"):
        send_message(token, chat_id, status_message())
    elif text.startswith("/settings"):
        send_message(token, chat_id, settings_message(config))
    elif text.startswith("/forget"):
        state["chat_ids"] = []
        send_message(token, chat_id, "Все сохраненные чаты удалены. Уведомления отключены.")
    else:
        send_message(token, chat_id, "Не понял команду. Напиши /help.")


def handle_callback(token, state, config, callback):
    callback_id = callback["id"]
    chat_id = callback["message"]["chat"]["id"]
    user_id = callback.get("from", {}).get("id", chat_id)

    if not is_allowed(user_id, config):
        logging.warning("blocked unauthorized callback from user_id=%s chat_id=%s", user_id, chat_id)
        answer_callback(token, callback_id, "Access denied")
        return

    parts = (callback.get("data") or "").split("|")
    action = parts[0] if parts else ""

    if action == "review":
        answer_callback(token, callback_id)
        send_next_review(token, chat_id)
        return

    if action == "show" and len(parts) == 3:
        try:
            set_index = int(parts[1])
            card_index = int(parts[2])
            card = next(
                item for item in due_cards()
                if item["set_index"] == set_index and item["card_index"] == card_index
            )
        except (ValueError, StopIteration):
            answer_callback(token, callback_id, "Card is no longer due")
            send_next_review(token, chat_id)
            return
        answer_callback(token, callback_id)
        send_message(token, chat_id, format_review_prompt(card, answer_visible=True), review_keyboard(card, answer_visible=True))
        return

    if action == "grade" and len(parts) == 4:
        try:
            result = grade_card(int(parts[1]), int(parts[2]), parts[3])
        except ValueError:
            result = None
        if not result:
            answer_callback(token, callback_id, "Could not save answer")
            return
        answer_callback(token, callback_id, "Saved")
        send_message(token, chat_id, f"{result['term']} -> {result['grade'].upper()}")
        send_next_review(token, chat_id)
        return

    answer_callback(token, callback_id, "Unknown action")


def process_update(token, state, config, update):
    update_id = int(update.get("update_id") or 0)
    if update_id and update_id < int(state.get("offset") or 0):
        logging.info("ignored duplicate update_id=%s", update_id)
        return False

    if update.get("message"):
        handle_command(token, state, config, update["message"])
    if update.get("callback_query"):
        handle_callback(token, state, config, update["callback_query"])

    if update_id:
        state["offset"] = max(int(state.get("offset") or 0), update_id + 1)
    save_state(state)
    return True


def poll_updates(token, state, config):
    updates = get_updates(token, int(state.get("offset") or 0))
    for update in updates:
        process_update(token, state, config, update)
    return bool(updates)


def notify_due(token, state, config):
    prune_chat_ids(state, config)
    cards = due_cards()
    if not cards or not state["chat_ids"]:
        return

    signature = due_signature(cards)
    if signature == state.get("last_signature"):
        return

    text = format_due_message(cards, config["site_url"])
    markup = {"inline_keyboard": [[{"text": "Start review", "callback_data": "review"}]]}
    for chat_id in list(state["chat_ids"]):
        try:
            send_long_message(token, chat_id, text, markup)
        except (HTTPError, URLError):
            logging.exception("failed to send due notification")

    state["last_signature"] = signature
    state["last_sent_at"] = int(time.time())
    save_state(state)


def acquire_single_instance_lock():
    lock_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    if hasattr(socket, "SO_EXCLUSIVEADDRUSE"):
        lock_socket.setsockopt(socket.SOL_SOCKET, socket.SO_EXCLUSIVEADDRUSE, 1)
    try:
        lock_socket.bind((LOCK_HOST, LOCK_PORT))
        lock_socket.listen(1)
        return lock_socket
    except OSError:
        lock_socket.close()
        return None


def run_polling(token, state, config):
    next_due_check = 0
    while True:
        poll_updates(token, state, config)
        now = time.time()
        if now >= next_due_check:
            notify_due(token, state, config)
            next_due_check = now + max(5, config["check_seconds"])


def main():
    setup_logging()
    lock_socket = acquire_single_instance_lock()
    if not lock_socket:
        print("EnglishCard bot is already running. Close the old bot window or stop the old python process.")
        logging.warning("bot refused to start because another instance is running")
        return

    config = load_config()
    configure_ssl(config["verify_ssl"])
    token = config["token"]
    if not token:
        print("Bot token is missing.")
        print("Set ENGLISHCARD_BOT_TOKEN or fill bot/config.json.")
        logging.error("bot token is missing")
        return

    try:
        me = get_me(token)
    except (HTTPError, URLError) as error:
        print("Telegram token check failed.")
        print("Check bot/config.json token and internet connection.")
        logging.exception("telegram token check failed: %s", error)
        return

    try:
        setup_bot_menu(token)
    except (HTTPError, URLError):
        logging.exception("failed to configure bot command menu")

    if not config["allowed_user_ids"]:
        print("No allowed_user_ids configured.")
        print("Send /id to the bot, copy your id into bot/config.json, then restart the bot.")

    state = load_state()
    logging.info("bot started as @%s", me.get("username"))
    print(f"EnglishCard Telegram bot is running as @{me.get('username')}. Press Ctrl+C to stop.")

    try:
        while True:
            try:
                run_polling(token, state, config)
            except (HTTPError, URLError):
                logging.exception("telegram network error")
                time.sleep(5)
            except Exception:
                logging.exception("bot loop error")
                time.sleep(5)
    except KeyboardInterrupt:
        print("Bot stopped.")


if __name__ == "__main__":
    main()

from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote
import json
import logging
import os
import time
import uuid


PROJECT_ROOT = Path(__file__).resolve().parent.parent
FRONTEND_DIR = PROJECT_ROOT / "frontend"
DATA_DIR = PROJECT_ROOT / "data"
DATA_FILE = DATA_DIR / "sets.json"
LOG_DIR = PROJECT_ROOT / "logs"
LOG_FILE = LOG_DIR / "app.log"
HOST = os.environ.get("ENGLISHCARD_HOST", "localhost")
PORT = int(os.environ.get("ENGLISHCARD_PORT", "3000"))


def setup_logging():
    LOG_DIR.mkdir(exist_ok=True)
    logging.basicConfig(
        filename=LOG_FILE,
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        encoding="utf-8",
    )


def log_event(event, **details):
    extra = f" {json.dumps(details, ensure_ascii=False)}" if details else ""
    logging.info("%s%s", event, extra)


def ensure_store():
    DATA_DIR.mkdir(exist_ok=True)
    if not DATA_FILE.exists():
        DATA_FILE.write_text(json.dumps({"sets": []}, ensure_ascii=False, indent=2), encoding="utf-8")
        log_event("created data store", path=str(DATA_FILE))


def read_store():
    ensure_store()
    try:
        data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        return {"sets": data["sets"] if isinstance(data.get("sets"), list) else []}
    except (json.JSONDecodeError, OSError) as error:
        logging.exception("failed to read store: %s", error)
        return {"sets": []}


def write_store(store):
    ensure_store()
    DATA_FILE.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    log_event("store saved", sets=len(store.get("sets", [])))


def clean_set(payload, set_id=None):
    cards = payload.get("cards") if isinstance(payload.get("cards"), list) else []
    cleaned_cards = []

    for card in cards:
        if not isinstance(card, dict):
            continue
        term = str(card.get("term", "")).strip()[:300]
        definition = str(card.get("definition", "")).strip()[:600]
        if term or definition:
            stats = card.get("stats") if isinstance(card.get("stats"), dict) else {}
            cleaned_cards.append({
                "id": str(card.get("id") or uuid.uuid4().hex[:10]),
                "term": term,
                "definition": definition,
                "dueAt": str(card.get("dueAt") or ""),
                "lastReviewedAt": str(card.get("lastReviewedAt") or ""),
                "intervalMs": int(card.get("intervalMs") or 0),
                "reviewCount": int(card.get("reviewCount") or 0),
                "stats": {
                    "again": int(stats.get("again") or 0),
                    "hard": int(stats.get("hard") or 0),
                    "good": int(stats.get("good") or 0),
                    "easy": int(stats.get("easy") or 0),
                },
                "history": card.get("history") if isinstance(card.get("history"), list) else [],
            })

    return {
        "id": set_id or payload.get("id") or f"{int(time.time() * 1000)}-{uuid.uuid4().hex[:8]}",
        "title": (str(payload.get("title", "")).strip()[:80] or "New set"),
        "description": str(payload.get("description", "")).strip()[:240],
        "updatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "cards": cleaned_cards,
    }


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(FRONTEND_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_json(self, status, payload=None):
        body = b"" if payload is None else json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if body:
            self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        if length > 1_000_000:
            raise ValueError("Request body is too large")
        raw = self.rfile.read(length).decode("utf-8") if length else "{}"
        return json.loads(raw)

    def do_GET(self):
        if self.path == "/api/sets":
            log_event("api sets read", client=self.address_string())
            self.send_json(200, read_store())
            return
        if self.path == "/new-set":
            store = read_store()
            created = clean_set({"title": "English words", "description": "", "cards": []})
            store["sets"].insert(0, created)
            write_store(store)
            log_event("set created by fallback link", id=created["id"], title=created["title"], client=self.address_string())
            self.send_response(303)
            self.send_header("Location", f"/editor.html?set={created['id']}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/sets":
            try:
                store = read_store()
                created = clean_set(self.read_json())
                store["sets"].insert(0, created)
                write_store(store)
                log_event("set created", id=created["id"], title=created["title"], client=self.address_string())
                self.send_json(201, created)
            except Exception as error:
                logging.exception("failed to create set: %s", error)
                self.send_json(500, {"error": "Failed to create set"})
            return
        if self.path == "/api/logs":
            try:
                payload = self.read_json()
                log_event(
                    "frontend",
                    level=str(payload.get("level", "info")),
                    message=str(payload.get("message", ""))[:500],
                    page=str(payload.get("page", ""))[:120],
                    stack=str(payload.get("stack", ""))[:1200],
                    client=self.address_string(),
                )
                self.send_json(204)
            except Exception as error:
                logging.exception("failed to write frontend log: %s", error)
                self.send_json(204)
            return
        self.send_json(404, {"error": "Not found"})

    def do_PUT(self):
        parts = [unquote(part) for part in self.path.split("/") if part]
        if len(parts) == 3 and parts[:2] == ["api", "sets"]:
            store = read_store()
            set_id = parts[2]
            for index, item in enumerate(store["sets"]):
                if item.get("id") == set_id:
                    updated = clean_set(self.read_json(), set_id=set_id)
                    store["sets"][index] = updated
                    write_store(store)
                    log_event("set updated", id=set_id, title=updated["title"], client=self.address_string())
                    self.send_json(200, updated)
                    return
            self.send_json(404, {"error": "Set not found"})
            return
        self.send_json(404, {"error": "Not found"})

    def do_DELETE(self):
        parts = [unquote(part) for part in self.path.split("/") if part]
        if len(parts) == 3 and parts[:2] == ["api", "sets"]:
            store = read_store()
            store["sets"] = [item for item in store["sets"] if item.get("id") != parts[2]]
            write_store(store)
            log_event("set deleted", id=parts[2], client=self.address_string())
            self.send_json(204)
            return
        self.send_json(404, {"error": "Not found"})

    def log_message(self, format, *args):
        message = format % args
        log_event("http", client=self.address_string(), message=message)
        print(f"{self.address_string()} - {message}")


if __name__ == "__main__":
    setup_logging()
    ensure_store()
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    shown_host = "localhost" if HOST in ("", "0.0.0.0") else HOST
    log_event("server started", host=HOST, port=PORT, frontend=str(FRONTEND_DIR), data=str(DATA_FILE), log=str(LOG_FILE))
    print(f"EnglishCard is running at http://{shown_host}:{PORT}")
    print(f"Frontend: {FRONTEND_DIR}")
    print(f"Data: {DATA_FILE}")
    print(f"Logs: {LOG_FILE}")
    server.serve_forever()

# 🗂️ EnglishCard

**EnglishCard** is a lightweight, efficient web application and Telegram bot designed for learning and reviewing foreign vocabulary using a **Spaced Repetition System (SRS)**.

Built without heavy third-party frameworks (Zero-Dependency Backend), it ensures ultra-fast performance, high reliability, and effortless deployment on any local computer or server.

---

## 🌟 Key Features

### 💻 Web Interface
* 🃏 **Flashcard Study Mode**: Interactive card flipping with SRS difficulty ratings (**Again**, **Hard**, **Good**, **Easy**).
* ✏️ **Deck & Card Editor**: Create, edit, and manage custom flashcard decks with ease.
* 📊 **Statistics & Analytics**: Track vocabulary retention progress, review history, and learning performance.
* 📦 **Import & Export**: Seamlessly import and export flashcard decks in JSON format.
* 🎨 **Modern UI**: Clean, responsive user interface with dark theme support and smooth design elements.

### 🤖 Telegram Bot
* 🔔 **Review Notifications**: Automatic Telegram reminders when flashcards are due for review.
* 🎯 **In-Chat Learning**: Practice cards directly within Telegram chats using interactive inline buttons without opening a browser.
* 🔒 **Whitelist Security**: Restrict bot usage to authorized Telegram User IDs.
* 🔗 **Direct Deep Links**: Quick navigation to the web interface for adding cards or viewing detailed stats.

---

## 🛠️ Tech Stack

* **Backend**: Python 3 (Standard library `http.server`, zero external dependencies).
* **Frontend**: HTML5, CSS3 (Modern Vanilla CSS), JavaScript (ES6+ Vanilla JS).
* **Telegram Bot**: Python 3 (`urllib`, Telegram Bot API).
* **Data Storage**: JSON (`data/sets.json`, `data/bot_state.json`).
* **Management Scripts**: PowerShell & Batch (`system/`).

---

## 📁 Project Structure

```text
EnglishCard/
├── backend/
│   └── server.py           # Pure Python REST API server & static file host
├── bot/
│   ├── config.example.json # Template for Telegram bot configuration
│   ├── config.json         # Active bot configuration (git-ignored)
│   └── englishbot.py       # Telegram bot core implementation
├── frontend/
│   ├── index.html          # Main landing page (deck list)
│   ├── study.html          # Flashcard study interface
│   ├── editor.html         # Deck and card editor
│   ├── stats.html          # Analytics dashboard
│   ├── app.js              # Core frontend application logic
│   └── styles.css          # Application styles
├── data/
│   ├── sets.json           # Flashcards and deck database
│   └── bot_state.json      # Telegram bot runtime state
├── logs/                   # Web server and bot logs
├── system/                 # Windows startup and sync scripts (.bat / .ps1)
└── README.md               # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
* Python **3.8** or higher.
* Operating System: Windows / Linux / macOS.

---

### 1. Running the Web Server

#### Option A (Windows Scripts):
Run the helper script from the `system/` directory:
* `system/start.bat` — Launches the server in the background and opens `http://localhost:3000` in your default browser.

#### Option B (Manual Terminal Launch):
```bash
python backend/server.py
```
The web application will be accessible at `http://localhost:3000`.

---

### 2. Setting Up and Running the Telegram Bot

1. Copy the configuration template:
   ```bash
   cp bot/config.example.json bot/config.json
   ```
2. Open `bot/config.json` and insert your Telegram Bot Token and authorized Telegram User IDs:
   ```json
   {
     "token": "YOUR_TELEGRAM_BOT_TOKEN",
     "allowed_user_ids": [123456789],
     "verify_ssl": true,
     "check_seconds": 60,
     "site_url": "http://localhost:3000"
   }
   ```
3. Start the bot:
   * **Windows Script:** `system/start_bot.bat`
   * **Terminal:**
     ```bash
     python bot/englishbot.py
     ```

---

## 📡 Backend REST API

The backend provides the following HTTP API endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/sets` | Retrieve all flashcard decks and review state |
| `POST` | `/api/sets` | Create a new flashcard deck |
| `PUT` | `/api/sets/:id` | Update an existing deck |
| `DELETE` | `/api/sets/:id` | Delete a deck by ID |
| `POST` | `/api/logs` | Log frontend errors and events on the server |

---

## 🤖 Telegram Bot Commands

* `/start` — Enable notifications and start interacting with the bot.
* `/review` — Begin a flashcard review session directly inside Telegram.
* `/due` — Show the count of cards ready for review.
* `/status` — View overall learning statistics and progress.
* `/settings` — Inspect current bot settings.
* `/help` — How to use the bot.
* `/id` — Display your Telegram User ID.
* `/stop` — Pause notifications.

---

## 📝 License

This project is available for personal and educational use.

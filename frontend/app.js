const translations = {
  uk: {
    moduleStatsTitle: "Статистика",
    moduleStatsText: "Пам'ять, повторення, due-картки.",
    statsToday: "Today",
    statsFutureDue: "Future Due",
    statsFutureText: "Кількість карток, що будуть готові до повторення.",
    statsReviews: "Reviews",
    statsReviewsText: "Скільки відповідей було натиснуто.",
    statsCardCounts: "Card Counts",
    statsAnswerButtons: "Answer Buttons",
    statsAnswerText: "Скільки разів натиснута кожна кнопка.",
    statsRetention: "Retention",
    noCardsStudied: "Сьогодні картки ще не повторювались.",
    commandPlaceholder: "Введи команду: картки, редактор, зберегти...",
    commandNoResults: "Команд не знайдено",
    cmdHome: "Головна",
    cmdOpenCards: "Відкрити картки",
    cmdNewSet: "Створити набір",
    cmdStudyMode: "Режим навчання",
    cmdEditorMode: "Режим редактора",
    cmdSave: "Зберегти",
    cmdCards: "Картки",
    cmdQuiz: "Тест",
    cmdWrite: "Письмо",
    cmdPrevCard: "Попередня картка",
    cmdNextCard: "Наступна картка",
    cmdFlipCard: "Перевернути картку",
    cmdCheckAnswer: "Перевірити відповідь",
    comingSoon: "Скоро",
    studyMode: "Учитися",
    editorMode: "Редактор",
    home: "Головна",
    homeEyebrow: "Навчальний центр",
    homeTitle: "Обери, що тренувати сьогодні",
    homeText: "Зараз доступні картки, а нижче вже підготовлені місця для граматики, аудіювання та текстів.",
    openCards: "Відкрити картки",
    setsStat: "наборів",
    cardsStat: "карток",
    moduleCardsTitle: "Картки",
    moduleCardsText: "Слова, переклади, тести і письмо.",
    moduleGrammarTitle: "Граматика",
    moduleGrammarText: "Місце для правил, вправ і прикладів.",
    moduleListeningTitle: "Аудіювання",
    moduleListeningText: "Майбутній розділ для слухання.",
    moduleTextsTitle: "Тексти",
    moduleTextsText: "Майбутній розділ для читання і розбору.",
    subtitle: "Локальні картки для слів, термінів і швидкого повторення",
    languageLabel: "Мова",
    themeLabel: "Тема",
    themeLight: "Світла",
    themeDark: "Темна",
    newSet: "+ Набір",
    searchSets: "Пошук наборів",
    emptyTitle: "Створи перший набір",
    emptyText: "Додай слова й переклади, а потім тренуй їх у картках, тесті або режимі письма.",
    createSet: "Створити набір",
    titlePlaceholder: "Назва набору",
    descriptionPlaceholder: "Опис, тема або нотатка",
    save: "Зберегти",
    delete: "Видалити",
    tabEdit: "Редактор",
    tabCards: "Картки",
    tabQuiz: "Тест",
    tabWrite: "Письмо",
    addCard: "+ Додати картку",
    previous: "Назад",
    flip: "Перевернути",
    next: "Вперед",
    check: "Перевірити",
    nextQuestion: "Наступне",
    saveError: "Помилка збереження",
    defaultSetTitle: "Англійські слова",
    sampleApple: "яблуко",
    sampleBook: "книга",
    sampleQuickly: "швидко",
    setCreated: "Набір створено",
    saved: "Збережено в data/sets.json",
    deleteConfirm: title => `Видалити набір "${title}"?`,
    setDeleted: "Набір видалено",
    termPlaceholder: "Термін / слово",
    definitionPlaceholder: "Визначення / переклад",
    removeCard: "Видалити картку",
    nothingFound: "Нічого не знайдено",
    cardCount: count => `${count} карток`,
    noFlashcards: "Додай хоча б одну заповнену картку і збережи набір.",
    quizNeedsCards: "Для тесту потрібно мінімум 2 заповнені картки.",
    writeNeedsCards: "Додай заповнені картки, щоб тренувати письмо.",
    writePlaceholder: "Введи слово або термін",
    chooseAnswer: "Вибери варіант відповіді",
    correct: "Правильно",
    wrong: answer => `Невірно. Відповідь: ${answer}`
  },
  en: {
    moduleStatsTitle: "Statistics",
    moduleStatsText: "Memory, reviews, and due cards.",
    statsToday: "Today",
    statsFutureDue: "Future Due",
    statsFutureText: "The number of reviews due in the future.",
    statsReviews: "Reviews",
    statsReviewsText: "The number of questions you have answered.",
    statsCardCounts: "Card Counts",
    statsAnswerButtons: "Answer Buttons",
    statsAnswerText: "The number of times you have pressed each button.",
    statsRetention: "Retention",
    noCardsStudied: "No cards have been studied today.",
    commandPlaceholder: "Type a command: cards, editor, save...",
    commandNoResults: "No commands found",
    cmdHome: "Home",
    cmdOpenCards: "Open cards",
    cmdNewSet: "Create set",
    cmdStudyMode: "Study mode",
    cmdEditorMode: "Editor mode",
    cmdSave: "Save",
    cmdCards: "Cards",
    cmdQuiz: "Quiz",
    cmdWrite: "Write",
    cmdPrevCard: "Previous card",
    cmdNextCard: "Next card",
    cmdFlipCard: "Flip card",
    cmdCheckAnswer: "Check answer",
    comingSoon: "Soon",
    studyMode: "Study",
    editorMode: "Editor",
    home: "Home",
    homeEyebrow: "Learning hub",
    homeTitle: "Choose what to practice today",
    homeText: "Flashcards are ready now, and the other sections are prepared for grammar, listening, and texts.",
    openCards: "Open cards",
    setsStat: "sets",
    cardsStat: "cards",
    moduleCardsTitle: "Flashcards",
    moduleCardsText: "Words, translations, quizzes, and writing.",
    moduleGrammarTitle: "Grammar",
    moduleGrammarText: "Space for rules, exercises, and examples.",
    moduleListeningTitle: "Listening",
    moduleListeningText: "Future section for audio practice.",
    moduleTextsTitle: "Texts",
    moduleTextsText: "Future section for reading and analysis.",
    subtitle: "Local flashcards for words, terms, and quick review",
    languageLabel: "Language",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    newSet: "+ Set",
    searchSets: "Search sets",
    emptyTitle: "Create your first set",
    emptyText: "Add words and translations, then practice them with cards, a quiz, or writing mode.",
    createSet: "Create set",
    titlePlaceholder: "Set title",
    descriptionPlaceholder: "Description, topic, or note",
    save: "Save",
    delete: "Delete",
    tabEdit: "Editor",
    tabCards: "Cards",
    tabQuiz: "Quiz",
    tabWrite: "Write",
    addCard: "+ Add card",
    previous: "Back",
    flip: "Flip",
    next: "Next",
    check: "Check",
    nextQuestion: "Next",
    saveError: "Save error",
    defaultSetTitle: "English words",
    sampleApple: "apple",
    sampleBook: "book",
    sampleQuickly: "quickly",
    setCreated: "Set created",
    saved: "Saved to data/sets.json",
    deleteConfirm: title => `Delete set "${title}"?`,
    setDeleted: "Set deleted",
    termPlaceholder: "Term / word",
    definitionPlaceholder: "Definition / translation",
    removeCard: "Delete card",
    nothingFound: "Nothing found",
    cardCount: count => `${count} cards`,
    noFlashcards: "Add at least one filled card and save the set.",
    quizNeedsCards: "The quiz needs at least 2 filled cards.",
    writeNeedsCards: "Add filled cards to practice writing.",
    writePlaceholder: "Enter the word or term",
    chooseAnswer: "Choose an answer",
    correct: "Correct",
    wrong: answer => `Wrong. Answer: ${answer}`
  },
  ru: {
    moduleStatsTitle: "Статистика",
    moduleStatsText: "Память, повторения и due-карточки.",
    statsToday: "Today",
    statsFutureDue: "Future Due",
    statsFutureText: "Количество карточек, которые будут готовы к повторению.",
    statsReviews: "Reviews",
    statsReviewsText: "Сколько ответов было нажато.",
    statsCardCounts: "Card Counts",
    statsAnswerButtons: "Answer Buttons",
    statsAnswerText: "Сколько раз нажата каждая кнопка.",
    statsRetention: "Retention",
    noCardsStudied: "Сегодня карточки еще не повторялись.",
    commandPlaceholder: "Введи команду: карточки, редактор, сохранить...",
    commandNoResults: "Команды не найдены",
    cmdHome: "Главная",
    cmdOpenCards: "Открыть карточки",
    cmdNewSet: "Создать набор",
    cmdStudyMode: "Режим учебы",
    cmdEditorMode: "Режим редактора",
    cmdSave: "Сохранить",
    cmdCards: "Карточки",
    cmdQuiz: "Тест",
    cmdWrite: "Письмо",
    cmdPrevCard: "Предыдущая карточка",
    cmdNextCard: "Следующая карточка",
    cmdFlipCard: "Перевернуть карточку",
    cmdCheckAnswer: "Проверить ответ",
    comingSoon: "Скоро",
    studyMode: "Учиться",
    editorMode: "Редактор",
    home: "Главная",
    homeEyebrow: "Учебный центр",
    homeTitle: "Выбери, что тренировать сегодня",
    homeText: "Сейчас доступны карточки, а ниже уже подготовлены места для грамматики, аудирования и текстов.",
    openCards: "Открыть карточки",
    setsStat: "наборов",
    cardsStat: "карточек",
    moduleCardsTitle: "Карточки",
    moduleCardsText: "Слова, переводы, тесты и письмо.",
    moduleGrammarTitle: "Грамматика",
    moduleGrammarText: "Место для правил, упражнений и примеров.",
    moduleListeningTitle: "Аудирование",
    moduleListeningText: "Будущий раздел для тренировки слуха.",
    moduleTextsTitle: "Тексты",
    moduleTextsText: "Будущий раздел для чтения и разбора.",
    subtitle: "Локальные карточки для слов, терминов и быстрых повторений",
    languageLabel: "Язык",
    themeLabel: "Тема",
    themeLight: "Светлая",
    themeDark: "Темная",
    newSet: "+ Набор",
    searchSets: "Поиск наборов",
    emptyTitle: "Создай первый набор",
    emptyText: "Добавь слова и переводы, а потом тренируй их в карточках, тесте или режиме письма.",
    createSet: "Создать набор",
    titlePlaceholder: "Название набора",
    descriptionPlaceholder: "Описание, тема или заметка",
    save: "Сохранить",
    delete: "Удалить",
    tabEdit: "Редактор",
    tabCards: "Карточки",
    tabQuiz: "Тест",
    tabWrite: "Письмо",
    addCard: "+ Добавить карточку",
    previous: "Назад",
    flip: "Перевернуть",
    next: "Вперед",
    check: "Проверить",
    nextQuestion: "Следующий",
    saveError: "Ошибка сохранения",
    defaultSetTitle: "Английские слова",
    sampleApple: "яблоко",
    sampleBook: "книга",
    sampleQuickly: "быстро",
    setCreated: "Набор создан",
    saved: "Сохранено в data/sets.json",
    deleteConfirm: title => `Удалить набор "${title}"?`,
    setDeleted: "Набор удален",
    termPlaceholder: "Термин / слово",
    definitionPlaceholder: "Определение / перевод",
    removeCard: "Удалить карточку",
    nothingFound: "Ничего не найдено",
    cardCount: count => `${count} карточек`,
    noFlashcards: "Добавь хотя бы одну заполненную карточку и сохрани набор.",
    quizNeedsCards: "Для теста нужно минимум 2 заполненные карточки.",
    writeNeedsCards: "Добавь заполненные карточки, чтобы тренировать письмо.",
    writePlaceholder: "Введи слово или термин",
    chooseAnswer: "Выбери вариант ответа",
    correct: "Правильно",
    wrong: answer => `Неверно. Ответ: ${answer}`
  }
};

const page = document.body.dataset.page || "home";
const getSystemTheme = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const state = {
  sets: [],
  currentId: null,
  mode: page === "editor" ? "editor" : "study",
  view: "cards",
  flashIndex: 0,
  flashBack: false,
  quizIndex: 0,
  writeIndex: 0,
  search: "",
  screen: page === "stats" ? "stats" : page === "study" || page === "editor" ? "cards" : "home",
  commandOpen: false,
  commandIndex: 0,
  commandQuery: "",
  statsExpandedDay: "",
  language: localStorage.getItem("englishCardLanguage") || "uk",
  theme: localStorage.getItem("englishCardTheme") || getSystemTheme()
};

const missingElement = document.createElement("div");
const $ = selector => document.querySelector(selector) || missingElement;
const homeScreen = $("#homeScreen");
const statsScreen = $("#statsScreen");
const appLayout = $("#appLayout");
const setList = $("#setList");
const editor = $("#editor");
const editorHead = $("#editorHead");
const emptyState = $("#emptyState");
const titleInput = $("#titleInput");
const descriptionInput = $("#descriptionInput");
const cardRows = $("#cardRows");
const toast = $("#toast");
const languageSelect = $("#languageSelect");
const themeSelect = $("#themeSelect");
const languageButton = $("#languageButton");
const languageMenu = $("#languageMenu");
const themeToggle = $("#themeToggle");
const commandPalette = $("#commandPalette");
const commandInput = $("#commandInput");
const commandList = $("#commandList");

const REVIEW_INTERVALS = {
  again: 60 * 1000,
  hard: 6 * 60 * 1000,
  good: 10 * 60 * 1000,
  easy: 4 * 24 * 60 * 60 * 1000
};

if (!translations[state.language]) state.language = "uk";
if (!["light", "dark"].includes(state.theme)) state.theme = "light";
if (!["home", "cards", "stats"].includes(state.screen)) state.screen = "home";

function t(key, ...args) {
  const value = translations[state.language][key] || translations.uk[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function currentSet() {
  return state.sets.find(set => set.id === state.currentId) || null;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function logClientError(message, error = null) {
  const payload = {
    level: "error",
    message,
    page: location.pathname,
    stack: error?.stack || String(error || "")
  };
  fetch("/api/logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => {});
}

window.addEventListener("error", event => {
  logClientError(event.message || "Unhandled frontend error", event.error);
});

window.addEventListener("unhandledrejection", event => {
  logClientError("Unhandled promise rejection", event.reason);
});

function runAsync(action) {
  return async event => {
    event?.preventDefault?.();
    try {
      await action(event);
    } catch (error) {
      logClientError(error.message || "Frontend action failed", error);
      showToast(error.message || t("saveError"));
    }
  };
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!response.ok && response.status !== 204) throw new Error(t("saveError"));
  return response.status === 204 ? null : response.json();
}

async function loadSets() {
  const data = await api("/api/sets");
  state.sets = data.sets || [];
  const requestedId = new URLSearchParams(location.search).get("set");
  state.currentId = state.sets.find(set => set.id === requestedId)?.id || state.sets[0]?.id || null;
  render();
}

function ensureCardMemory(card) {
  card.id ||= `card-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  card.dueAt ||= "";
  card.lastReviewedAt ||= "";
  card.intervalMs ||= 0;
  card.reviewCount ||= 0;
  card.stats ||= { again: 0, hard: 0, good: 0, easy: 0 };
  card.history ||= [];
  return card;
}

function allCards() {
  return state.sets.flatMap(set => set.cards.map(card => ({ set, card: ensureCardMemory(card) })));
}

function dueCards() {
  const now = Date.now();
  return allCards().filter(({ card }) => card.term && card.definition && (!card.dueAt || Date.parse(card.dueAt) <= now));
}

function blankSet() {
  return {
    title: t("defaultSetTitle"),
    description: "",
    cards: []
  };
}

async function createSet() {
  state.screen = "cards";
  state.mode = "editor";
  state.view = "cards";
  const created = await api("/api/sets", {
    method: "POST",
    body: JSON.stringify(blankSet())
  });
  state.sets.unshift(created);
  state.currentId = created.id;
  state.flashIndex = 0;
  state.flashBack = false;
  location.href = `editor.html?set=${encodeURIComponent(created.id)}`;
  showToast(t("setCreated"));
}

function collectEditorSet() {
  const existing = currentSet()?.cards || [];
  const cards = [...cardRows.querySelectorAll(".cardRow")].map((row, index) => ({
    ...ensureCardMemory(existing[index] || {}),
    term: row.querySelector("[data-field='term']").value,
    definition: row.querySelector("[data-field='definition']").value
  }));
  return {
    title: titleInput.value,
    description: descriptionInput.value,
    cards
  };
}

function keepEditorDraft() {
  const set = currentSet();
  if (!set || editor.classList.contains("hidden")) return;
  const draft = collectEditorSet();
  state.sets = state.sets.map(item => (item.id === set.id ? { ...item, ...draft } : item));
}

async function saveSet(options = {}) {
  const set = currentSet();
  if (!set) return;
  if (page !== "editor" && state.mode !== "editor") {
    await persistCurrentSet({ quiet: true });
    if (!options.quiet) showToast(t("saved"));
    return;
  }
  const saved = await api(`/api/sets/${encodeURIComponent(set.id)}`, {
    method: "PUT",
    body: JSON.stringify(collectEditorSet())
  });
  state.sets = state.sets.map(item => (item.id === saved.id ? saved : item));
  render();
  if (!options.quiet) showToast(t("saved"));
}

async function deleteSet() {
  const set = currentSet();
  if (!set) return;
  if (!confirm(t("deleteConfirm", set.title))) return;
  await api(`/api/sets/${encodeURIComponent(set.id)}`, { method: "DELETE" });
  state.sets = state.sets.filter(item => item.id !== set.id);
  state.currentId = state.sets[0]?.id || null;
  state.flashIndex = 0;
  state.flashBack = false;
  render();
  showToast(t("setDeleted"));
}

function addCard(term = "", definition = "") {
  const row = document.createElement("div");
  row.className = "cardRow";
  row.innerHTML = `
    <input data-field="term" placeholder="${escapeAttr(t("termPlaceholder"))}" value="${escapeAttr(term)}">
    <input data-field="definition" placeholder="${escapeAttr(t("definitionPlaceholder"))}" value="${escapeAttr(definition)}">
    <button class="removeCard" title="${escapeAttr(t("removeCard"))}">x</button>
  `;
  row.querySelector(".removeCard").addEventListener("click", () => row.remove());
  cardRows.appendChild(row);
}

function applyChrome() {
  document.documentElement.lang = state.language;
  document.documentElement.dataset.theme = state.theme;
  document.body.dataset.theme = state.theme;
  languageSelect.value = state.language;
  themeSelect.value = state.theme;
  languageButton.textContent = ({ uk: "UA", en: "US", ru: "RU" })[state.language] || "UA";
  themeToggle.textContent = state.theme === "dark" ? "\u263e" : "\u2600";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
}

function showScreen(screen) {
  if (screen === "home") {
    location.href = "index.html";
    return;
  }
  if (screen === "stats") {
    location.href = "stats.html";
    return;
  }
  if (screen === "cards") {
    const suffix = state.currentId ? `?set=${encodeURIComponent(state.currentId)}` : "";
    location.href = `study.html${suffix}`;
  }
}

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

function renderStats() {
  const cardItems = allCards();
  const cards = cardItems.map(item => item.card);
  const histories = cardItems.flatMap(({ set, card }) => (card.history || []).map(entry => ({ ...entry, set, card })));
  const today = histories.filter(entry => Date.parse(entry.at) >= startOfToday());
  const totalReviews = histories.length;
  const correctReviews = histories.filter(entry => entry.grade === "good" || entry.grade === "easy").length;
  const retention = totalReviews ? Math.round((correctReviews / totalReviews) * 100) : 0;
  const now = Date.now();

  $("#todayStatsText").textContent = today.length ? `${today.length} reviews today.` : t("noCardsStudied");
  $("#futureDueBars").innerHTML = makeBars([
    ["due now", cards.filter(card => !card.dueAt || Date.parse(card.dueAt) <= now).length],
    ["1 hour", cards.filter(card => Date.parse(card.dueAt || 0) > now && Date.parse(card.dueAt) <= now + 3600000).length],
    ["1 day", cards.filter(card => Date.parse(card.dueAt || 0) > now && Date.parse(card.dueAt) <= now + 86400000).length],
    ["4 days", cards.filter(card => Date.parse(card.dueAt || 0) > now && Date.parse(card.dueAt) <= now + 4 * 86400000).length]
  ]);
  $("#reviewBars").innerHTML = renderDailyReviewChart(histories);
  $("#cardCountsTable").innerHTML = makeTable([
    ["New", cards.filter(card => !card.reviewCount).length],
    ["Learning", cards.filter(card => card.reviewCount > 0 && (Date.parse(card.dueAt || 0) - now) < 86400000).length],
    ["Young", cards.filter(card => card.intervalMs >= 86400000 && card.intervalMs < 21 * 86400000).length],
    ["Mature", cards.filter(card => card.intervalMs >= 21 * 86400000).length],
    ["Total", cards.length]
  ]);
  $("#answerButtonsTable").innerHTML = makeTable(["again", "hard", "good", "easy"].map(grade => [
    grade,
    cards.reduce((sum, card) => sum + (card.stats?.[grade] || 0), 0)
  ]));
  $("#retentionTable").innerHTML = makeTable([
    ["Correct", correctReviews],
    ["Wrong", histories.filter(entry => entry.grade === "again" || entry.grade === "hard").length],
    ["Retention", `${retention}%`]
  ]);
}

function makeBars(rows) {
  const max = Math.max(...rows.map(row => Number(row[1]) || 0), 1);
  return rows.map(([label, value]) => `
    <div class="miniBar">
      <span>${escapeHtml(label)}</span>
      <b style="width:${Math.max((Number(value) / max) * 100, value ? 8 : 0)}%"></b>
      <em>${escapeHtml(value)}</em>
    </div>
  `).join("");
}

function makeTable(rows) {
  return rows.map(([label, value]) => `
    <div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
  `).join("");
}

function dayKey(time) {
  const date = new Date(time);
  date.setHours(0, 0, 0, 0);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function shortDayLabel(key) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString(undefined, { day: "2-digit", month: "short" });
}

function groupReviewDays(histories) {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let index = 13; index >= 0; index -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    const key = dayKey(date.getTime());
    days.push({
      key,
      label: shortDayLabel(key),
      entries: [],
      grades: { again: 0, hard: 0, good: 0, easy: 0 }
    });
  }

  const dayMap = new Map(days.map(day => [day.key, day]));
  histories.forEach(entry => {
    const time = Date.parse(entry.at);
    if (!Number.isFinite(time)) return;
    const day = dayMap.get(dayKey(time));
    if (!day) return;
    day.entries.push(entry);
    if (day.grades[entry.grade] !== undefined) day.grades[entry.grade] += 1;
  });

  return days;
}

function failedReviewDetails(entries) {
  const failed = entries.filter(entry => entry.grade === "again" || entry.grade === "hard");
  if (!failed.length) return "No failed cards";
  return failed.slice(0, 8).map(entry => `${entry.card.term} (${entry.grade})`).join("\n");
}

function renderDailyReviewChart(histories) {
  const days = groupReviewDays(histories);
  const max = Math.max(...days.map(day => day.entries.length), 1);
  const gradeOrder = ["again", "hard", "good", "easy"];
  const gradeWeight = { again: 4, hard: 3, good: 2, easy: 1 };

  return `
    <div class="dailyChart" role="list" aria-label="Daily reviews">
      ${days.map(day => {
        const total = day.entries.length;
        const expanded = state.statsExpandedDay === day.key;
        const failed = day.entries.filter(entry => entry.grade === "again" || entry.grade === "hard").length;
        const height = Math.max((total / max) * 100, total ? 8 : 0);
        const sortedGrades = gradeOrder
          .map(grade => [grade, day.grades[grade]])
          .filter(([, value]) => value)
          .sort((a, b) => b[1] - a[1] || gradeWeight[b[0]] - gradeWeight[a[0]]);
        const segments = sortedGrades.map(([grade, value]) => `
          <span class="daySegment ${grade}" style="height:${Math.max((value / total) * 100, 10)}%" title="${escapeAttr(`${grade}: ${value}`)}">
            <em>${escapeHtml(value)}</em>
          </span>
        `).join("");

        return `
          <button class="dayBar ${expanded ? "expanded" : ""}" type="button" data-day="${escapeAttr(day.key)}" data-tooltip="${escapeAttr(failedReviewDetails(day.entries))}" title="${escapeAttr(failedReviewDetails(day.entries))}" aria-label="${escapeAttr(`${day.label}: ${total} reviews, ${failed} failed`)}">
            <span class="dayTrack">
              <span class="dayFill" style="height:${height}%">
                ${expanded && total ? `<span class="daySegments">${segments}</span>` : ""}
              </span>
            </span>
            <strong>${escapeHtml(total)}</strong>
            <small>${escapeHtml(day.label)}</small>
          </button>
        `;
      }).join("")}
    </div>
    <div class="chartLegend">
      <span class="again">again</span>
      <span class="hard">hard</span>
      <span class="good">good</span>
      <span class="easy">easy</span>
    </div>
  `;
}

function isTypingTarget(target) {
  return ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

function getCommands() {
  const hasSet = Boolean(currentSet());
  const inCards = state.screen === "cards";
  const inStudy = inCards && state.mode === "study";
  return [
    { key: "cmdHome", hint: "H", action: () => showScreen("home") },
    { key: "cmdOpenCards", hint: "O", action: () => showScreen("cards") },
    { key: "cmdNewSet", hint: "N", action: createSet },
    { key: "cmdStudyMode", hint: "S", disabled: !hasSet, action: switchToStudyMode },
    { key: "cmdEditorMode", hint: "E", disabled: !hasSet, action: switchToEditorMode },
    { key: "cmdSave", hint: "Ctrl+S", disabled: !hasSet, action: () => saveSet() },
    { key: "cmdCards", hint: "1", disabled: !inStudy, action: () => switchStudyView("cards") },
    { key: "cmdQuiz", hint: "2", disabled: !inStudy, action: () => switchStudyView("quiz") },
    { key: "cmdWrite", hint: "3", disabled: !inStudy, action: () => switchStudyView("write") },
    { key: "cmdPrevCard", hint: "Left", disabled: !(inStudy && state.view === "cards"), action: previousFlashcard },
    { key: "cmdNextCard", hint: "Right", disabled: !(inStudy && state.view === "cards"), action: nextFlashcard },
    { key: "cmdFlipCard", hint: "Space", disabled: !(inStudy && state.view === "cards"), action: flipFlashcard },
    { key: "cmdCheckAnswer", hint: "Enter", disabled: !(inStudy && (state.view === "quiz" || state.view === "write")), action: checkCurrentAnswer }
  ].filter(command => !command.disabled);
}

function filteredCommands() {
  const query = state.commandQuery.trim().toLowerCase();
  return getCommands().filter(command => {
    const title = t(command.key).toLowerCase();
    return !query || title.includes(query) || command.hint.toLowerCase().includes(query);
  });
}

function openCommandPalette() {
  state.commandOpen = true;
  state.commandIndex = 0;
  state.commandQuery = "";
  commandInput.value = "";
  renderCommandPalette();
  commandPalette.classList.remove("hidden");
  commandInput.focus();
}

function closeCommandPalette() {
  state.commandOpen = false;
  commandPalette.classList.add("hidden");
}

function renderCommandPalette() {
  const commands = filteredCommands();
  state.commandIndex = Math.min(state.commandIndex, Math.max(commands.length - 1, 0));
  commandList.innerHTML = "";

  if (!commands.length) {
    const empty = document.createElement("div");
    empty.className = "commandEmpty";
    empty.textContent = t("commandNoResults");
    commandList.appendChild(empty);
    return;
  }

  commands.forEach((command, index) => {
    const button = document.createElement("button");
    button.className = `commandItem ${index === state.commandIndex ? "active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span>${escapeHtml(t(command.key))}</span><kbd>${escapeHtml(command.hint)}</kbd>`;
    button.addEventListener("click", () => executeCommand(command));
    commandList.appendChild(button);
  });
}

function executeCommand(command) {
  closeCommandPalette();
  Promise.resolve(command.action()).catch(error => {
    logClientError(error.message || "Command failed", error);
    showToast(error.message || t("saveError"));
  });
}

function executeSelectedCommand() {
  const command = filteredCommands()[state.commandIndex];
  if (command) executeCommand(command);
}

async function switchToStudyMode() {
  if (state.mode === "editor") await saveSet({ quiet: true });
  const suffix = state.currentId ? `?set=${encodeURIComponent(state.currentId)}` : "";
  location.href = `study.html${suffix}`;
}

function switchToEditorMode() {
  if (!currentSet()) return;
  location.href = `editor.html?set=${encodeURIComponent(currentSet().id)}`;
}

function switchStudyView(view) {
  state.screen = "cards";
  state.mode = "study";
  state.view = view;
  state.flashBack = false;
  render();
}

function previousFlashcard() {
  const cards = usableCards();
  state.flashIndex = (state.flashIndex - 1 + Math.max(cards.length, 1)) % Math.max(cards.length, 1);
  state.flashBack = false;
  renderFlashcard();
}

function nextFlashcard() {
  const cards = usableCards();
  state.flashIndex = (state.flashIndex + 1) % Math.max(cards.length, 1);
  state.flashBack = false;
  renderFlashcard();
}

function checkCurrentAnswer() {
  if (state.view === "quiz") checkQuiz();
  if (state.view === "write") checkWrite();
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderList() {
  const query = state.search.toLowerCase();
  const sets = state.sets.filter(set => {
    const text = `${set.title} ${set.description}`.toLowerCase();
    return text.includes(query);
  });

  setList.innerHTML = "";
  if (!sets.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = t("nothingFound");
    setList.appendChild(empty);
    return;
  }

  sets.forEach(set => {
    const button = document.createElement("button");
    button.className = `setItem ${set.id === state.currentId ? "active" : ""}`;
    button.innerHTML = `<strong>${escapeHtml(set.title)}</strong><span>${t("cardCount", set.cards.length)}</span>`;
    button.addEventListener("click", () => {
      state.currentId = set.id;
      state.mode = page === "editor" ? "editor" : "study";
      state.view = "cards";
      state.flashIndex = 0;
      state.flashBack = false;
      state.quizIndex = 0;
      state.writeIndex = 0;
      history.replaceState(null, "", `${location.pathname}?set=${encodeURIComponent(set.id)}`);
      render();
    });
    setList.appendChild(button);
  });
}

function renderEditor() {
  const set = currentSet();
  emptyState.classList.toggle("hidden", Boolean(set));
  editor.classList.toggle("hidden", !set);
  if (!set) return;

  titleInput.value = set.title;
  descriptionInput.value = set.description;
  cardRows.innerHTML = "";
  (set.cards.length ? set.cards : [{ term: "", definition: "" }]).forEach(card => {
    addCard(card.term, card.definition);
  });
  renderMode();
  renderView();
}

function renderMode() {
  const isEditor = state.mode === "editor";
  editorHead.classList.toggle("hidden", !isEditor);
  $("#editView").classList.toggle("hidden", !isEditor);
  $("#studyTabs").classList.toggle("hidden", isEditor);
  $("#studyModeBtn").classList.toggle("active", !isEditor);
  $("#editorModeBtn").classList.toggle("active", isEditor);
}

function renderHome() {
  const setCount = state.sets.length;
  const cardCount = state.sets.reduce((sum, set) => sum + set.cards.length, 0);
  $("#homeSetCount").textContent = setCount;
  $("#homeCardCount").textContent = cardCount;
}

function renderView() {
  renderMode();
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === state.view);
  });
  document.querySelectorAll(".view").forEach(view => view.classList.add("hidden"));
  if (state.mode === "editor") {
    $("#editView").classList.remove("hidden");
    return;
  }
  $(`#${state.view}View`).classList.remove("hidden");

  if (state.view === "cards") renderFlashcard();
  if (state.view === "quiz") renderQuiz();
  if (state.view === "write") renderWrite();
}

function usableCards() {
  const set = currentSet();
  return (set?.cards || []).filter(card => card.term && card.definition);
}

function renderFlashcard() {
  const cards = usableCards();
  const flashcard = $("#flashcard");
  const front = $("#flashcardFront");
  const back = $("#flashcardBack");

  flashcard.classList.toggle("is-flipped", state.flashBack);
  if (!cards.length) {
    front.textContent = t("noFlashcards");
    back.textContent = t("noFlashcards");
    $("#cardCounter").textContent = "";
    return;
  }

  state.flashIndex = clampIndex(state.flashIndex, cards.length);
  const card = cards[state.flashIndex];
  front.textContent = card.term;
  back.textContent = card.definition;
  $("#cardCounter").textContent = `${state.flashIndex + 1} / ${cards.length}`;
}

function flipFlashcard() {
  if (!usableCards().length) return;
  state.flashBack = !state.flashBack;
  renderFlashcard();
}

async function gradeCurrentCard(grade) {
  const set = currentSet();
  const cards = usableCards();
  if (!set || !cards.length || !REVIEW_INTERVALS[grade]) return;

  const card = ensureCardMemory(cards[state.flashIndex]);
  const now = new Date();
  card.intervalMs = REVIEW_INTERVALS[grade];
  card.dueAt = new Date(now.getTime() + card.intervalMs).toISOString();
  card.lastReviewedAt = now.toISOString();
  card.reviewCount += 1;
  card.stats[grade] = (card.stats[grade] || 0) + 1;
  card.history.push({ grade, at: now.toISOString(), nextDueAt: card.dueAt });
  card.history = card.history.slice(-300);

  await persistCurrentSet({ quiet: true });
  nextFlashcard();
  showToast(`${grade.toUpperCase()} -> ${formatDue(card.dueAt)}`);
}

async function persistCurrentSet(options = {}) {
  const set = currentSet();
  if (!set) return;
  const saved = await api(`/api/sets/${encodeURIComponent(set.id)}`, {
    method: "PUT",
    body: JSON.stringify(set)
  });
  state.sets = state.sets.map(item => (item.id === saved.id ? saved : item));
  if (!options.quiet) render();
}

function formatDue(iso) {
  const diff = Date.parse(iso) - Date.now();
  if (diff < 90_000) return "1 min";
  if (diff < 60 * 60 * 1000) return `${Math.round(diff / 60000)} min`;
  if (diff < 48 * 60 * 60 * 1000) return `${Math.round(diff / 3600000)} h`;
  return `${Math.round(diff / 86400000)} d`;
}

function renderQuiz() {
  const cards = usableCards();
  const box = $("#quizBox");
  if (cards.length < 2) {
    box.innerHTML = `<p>${escapeHtml(t("quizNeedsCards"))}</p>`;
    return;
  }
  state.quizIndex = clampIndex(state.quizIndex, cards.length);
  const card = cards[state.quizIndex];
  const options = shuffle([
    card.definition,
    ...shuffle(cards.filter(item => item !== card).map(item => item.definition)).slice(0, 3)
  ]);
  box.innerHTML = `
    <p class="question">${escapeHtml(card.term)}</p>
    <div class="optionList">
      ${options
        .map(
          option => `<label><input type="radio" name="quizAnswer" value="${escapeAttr(option)}"> ${escapeHtml(option)}</label>`
        )
        .join("")}
    </div>
    <div id="quizResult" class="result"></div>
  `;
}

function renderWrite() {
  const cards = usableCards();
  const box = $("#writeBox");
  if (!cards.length) {
    box.innerHTML = `<p>${escapeHtml(t("writeNeedsCards"))}</p>`;
    return;
  }
  state.writeIndex = clampIndex(state.writeIndex, cards.length);
  const card = cards[state.writeIndex];
  box.innerHTML = `
    <p class="question">${escapeHtml(card.definition)}</p>
    <input id="writeAnswer" class="answerInput" placeholder="${escapeAttr(t("writePlaceholder"))}">
    <div id="writeResult" class="result"></div>
  `;
  $("#writeAnswer").focus();
}

function checkQuiz() {
  const cards = usableCards();
  if (cards.length < 2) return;
  const selected = document.querySelector("input[name='quizAnswer']:checked");
  const result = $("#quizResult");
  if (!selected) {
    result.textContent = t("chooseAnswer");
    result.className = "result bad";
    return;
  }
  const correct = selected.value === cards[state.quizIndex].definition;
  result.textContent = correct ? t("correct") : t("wrong", cards[state.quizIndex].definition);
  result.className = `result ${correct ? "good" : "bad"}`;
}

function checkWrite() {
  const cards = usableCards();
  if (!cards.length) return;
  const answer = $("#writeAnswer").value.trim().toLowerCase();
  const correctAnswer = cards[state.writeIndex].term.trim().toLowerCase();
  const correct = answer === correctAnswer;
  const result = $("#writeResult");
  result.textContent = correct ? t("correct") : t("wrong", cards[state.writeIndex].term);
  result.className = `result ${correct ? "good" : "bad"}`;
}

function nextQuiz() {
  const cards = usableCards();
  state.quizIndex = (state.quizIndex + 1) % Math.max(cards.length, 1);
  renderQuiz();
}

function nextWrite() {
  const cards = usableCards();
  state.writeIndex = (state.writeIndex + 1) % Math.max(cards.length, 1);
  renderWrite();
}

function clampIndex(index, length) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function render() {
  applyChrome();
  homeScreen.classList.toggle("hidden", state.screen !== "home");
  statsScreen.classList.toggle("hidden", state.screen !== "stats");
  appLayout.classList.toggle("hidden", state.screen !== "cards");
  renderHome();
  if (state.screen === "stats") {
    renderStats();
    return;
  }
  if (state.screen === "home") return;
  renderList();
  renderEditor();
}

$("#homeBtn").addEventListener("click", () => showScreen("home"));
$("#openCardsBtn").addEventListener("click", () => showScreen("cards"));
$("#moduleCardsBtn").addEventListener("click", () => showScreen("cards"));
$("#moduleStatsBtn").addEventListener("click", () => showScreen("stats"));
$("#statsBackBtn").addEventListener("click", () => showScreen("home"));
$("#reviewBars").addEventListener("click", event => {
  const bar = event.target.closest(".dayBar");
  if (!bar) return;
  state.statsExpandedDay = state.statsExpandedDay === bar.dataset.day ? "" : bar.dataset.day;
  renderStats();
});
$("#homeCreateSetBtn").addEventListener("click", runAsync(createSet));
$("#newSetBtn").addEventListener("click", runAsync(createSet));
$("#emptyNewSetBtn").addEventListener("click", runAsync(createSet));
$("#studyModeBtn").addEventListener("click", switchToStudyMode);
$("#editorModeBtn").addEventListener("click", switchToEditorMode);
$("#saveBtn").addEventListener("click", runAsync(saveSet));
$("#deleteBtn").addEventListener("click", runAsync(deleteSet));
$("#addCardBtn").addEventListener("click", () => addCard());
$("#searchInput").addEventListener("input", event => {
  state.search = event.target.value;
  renderList();
});
languageSelect.addEventListener("change", event => {
  keepEditorDraft();
  state.language = event.target.value;
  localStorage.setItem("englishCardLanguage", state.language);
  render();
});
themeSelect.addEventListener("change", event => {
  state.theme = event.target.value;
  localStorage.setItem("englishCardTheme", state.theme);
  applyChrome();
});
languageButton.addEventListener("click", event => {
  event.stopPropagation();
  languageMenu.classList.toggle("hidden");
});
languageMenu.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    keepEditorDraft();
    state.language = button.dataset.lang;
    localStorage.setItem("englishCardLanguage", state.language);
    languageMenu.classList.add("hidden");
    render();
  });
});
themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("englishCardTheme", state.theme);
  applyChrome();
});
document.addEventListener("click", event => {
  if (!languageMenu.contains(event.target) && event.target !== languageButton) {
    languageMenu.classList.add("hidden");
  }
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", runAsync(async () => {
    await saveSet({ quiet: true });
    state.view = tab.dataset.view;
    state.flashBack = false;
    render();
  }));
});

$("#flashcard").addEventListener("click", flipFlashcard);
$("#flipCardBtn").addEventListener("click", flipFlashcard);
$("#prevCardBtn").addEventListener("click", previousFlashcard);
$("#nextCardBtn").addEventListener("click", nextFlashcard);
$("#checkQuizBtn").addEventListener("click", checkQuiz);
$("#nextQuizBtn").addEventListener("click", nextQuiz);
$("#checkWriteBtn").addEventListener("click", checkWrite);
$("#nextWriteBtn").addEventListener("click", nextWrite);
document.querySelectorAll(".memoryButtons button").forEach(button => {
  button.addEventListener("click", runAsync(() => gradeCurrentCard(button.dataset.grade)));
});

commandInput.addEventListener("input", event => {
  state.commandQuery = event.target.value;
  state.commandIndex = 0;
  renderCommandPalette();
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();

  if ((event.ctrlKey || event.metaKey) && key === "k") {
    event.preventDefault();
    openCommandPalette();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "s") {
    event.preventDefault();
    if (currentSet()) runAsync(saveSet)(event);
    return;
  }

  if (state.commandOpen) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeCommandPalette();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      state.commandIndex = Math.min(state.commandIndex + 1, Math.max(filteredCommands().length - 1, 0));
      renderCommandPalette();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      state.commandIndex = Math.max(state.commandIndex - 1, 0);
      renderCommandPalette();
    } else if (event.key === "Enter") {
      event.preventDefault();
      executeSelectedCommand();
    }
    return;
  }

  if (isTypingTarget(event.target)) return;

  if (event.key === "?" || event.key === "F1") {
    event.preventDefault();
    openCommandPalette();
  } else if (key === "h") {
    showScreen("home");
  } else if (key === "o") {
    showScreen("cards");
  } else if (key === "n") {
    runAsync(createSet)(event);
  } else if (key === "e") {
    runAsync(switchToEditorMode)(event);
  } else if (key === "s") {
    runAsync(switchToStudyMode)(event);
  } else if (event.key === "1") {
    switchStudyView("cards");
  } else if (event.key === "2") {
    switchStudyView("quiz");
  } else if (event.key === "3") {
    switchStudyView("write");
  } else if (event.key === "ArrowLeft" && state.screen === "cards" && state.mode === "study" && state.view === "cards") {
    event.preventDefault();
    previousFlashcard();
  } else if (event.key === "ArrowRight" && state.screen === "cards" && state.mode === "study" && state.view === "cards") {
    event.preventDefault();
    nextFlashcard();
  } else if (event.code === "Space" && event.target.tagName !== "BUTTON" && state.screen === "cards" && state.mode === "study" && state.view === "cards") {
    event.preventDefault();
    flipFlashcard();
  } else if (event.key === "Enter" && state.screen === "cards" && state.mode === "study" && (state.view === "quiz" || state.view === "write")) {
    event.preventDefault();
    checkCurrentAnswer();
  }
});

loadSets().catch(error => {
  applyChrome();
  showToast(error.message);
});

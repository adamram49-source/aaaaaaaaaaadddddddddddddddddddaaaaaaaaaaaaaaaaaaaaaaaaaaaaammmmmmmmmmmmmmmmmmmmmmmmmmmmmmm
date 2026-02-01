import { user, saveUser, loadUser } from "./user.js";
import { subjects, subjectName, switchSubject } from "./subjects.js";
import { newQuestion, currentAnswer } from "./questions.js";
import { checkAchievements, renderAchievements } from "./achievements.js";
import { drawChart } from "./chart.js";

const login = document.getElementById("login");
const game = document.getElementById("game");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectSelect = document.getElementById("subjectSelect");
const startBtn = document.getElementById("startBtn");

const welcome = document.getElementById("welcome");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const currentSubEl = document.getElementById("currentSubject");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const msgEl = document.getElementById("msg");
const achievementsEl = document.getElementById("achievements");
const chartEl = document.getElementById("chart");
const checkBtn = document.getElementById("checkBtn");
const switchBtn = document.getElementById("switchSubject");

// -------- אתחול מקצועות בתיבה --------
subjects.forEach(s => {
  const opt = document.createElement("option");
  opt.value = s;
  opt.text = subjectName(s);
  subjectSelect.appendChild(opt);
});

// -------- התחלה --------
startBtn.addEventListener("click", () => {
  user.name = nameInput.value;
  user.age = +ageInput.value;
  user.subject = subjectSelect.value;

  loadUser();

  login.classList.add("hidden");
  game.classList.remove("hidden");

  welcome.innerText = `שלום ${user.name} 👋`;
  renderStats();
  renderQuestion();
  dailyChallenge();
});

// -------- בדיקה --------
checkBtn.addEventListener("click", () => {
  if (answerEl.value == currentAnswer) {
    user.score += 10;
    msgEl.innerText = "✔️ נכון!";
    user.history.push(user.score);
    levelCheck();
    checkAchievements();
  } else {
    msgEl.innerText = "❌ לא נכון";
  }

  saveUser();
  renderStats();
  renderAchievements(achievementsEl);
  renderQuestion();
});

// -------- החלפת מקצוע --------
switchBtn.addEventListener("click", () => {
  user.subject = switchSubject(user.subject);
  currentSubEl.innerText = subjectName(user.subject);
  renderQuestion();
});

// -------- פונקציות --------
function renderStats() {
  scoreEl.innerText = user.score;
  levelEl.innerText = user.level;
  currentSubEl.innerText = subjectName(user.subject);
  drawChart(chartEl);
}

function renderQuestion() {
  questionEl.innerText = newQuestion();
  answerEl.value = "";
}

function levelCheck() {
  if (user.score >= user.level * 40) {
    user.level++;
    msgEl.innerText += " 🎉 עלית רמה!";
  }
}

// -------- אתגר יומי --------
function dailyChallenge() {
  const today = new Date().toDateString();
  if (localStorage.getItem("daily") !== today) {
    user.score += 20;
    localStorage.setItem("daily", today);
    msgEl.innerText = "🔥 אתגר יומי הושלם! +20";
  }
}

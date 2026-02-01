import { user } from "./user.js";

export let currentAnswer = null;

// שאלות דינמיות לפי מקצוע
export function newQuestion() {
  if (user.subject === "math") return generateMath();
  if (user.subject === "english") return generateEnglish();
  if (user.subject === "science") return generateScience();
}

function generateMath() {
  let max = user.level * 5;
  let a = rand(1, max);
  let b = rand(1, max);
  let ops = ["+", "-", "*"];
  let op = ops[Math.min(user.level - 1, ops.length - 1)];

  currentAnswer = eval(`${a}${op}${b}`);
  return `${a} ${op} ${b} = ?`;
}

function generateEnglish() {
  const words = [
    ["dog", "כלב"],
    ["cat", "חתול"],
    ["house", "בית"],
    ["car", "אוטו"],
    ["tree", "עץ"]
  ];
  let w = words[rand(0, words.length - 1)];
  currentAnswer = w[1];
  return `תרגם: ${w[0]}`;
}

function generateScience() {
  const qs = [
    { q: "מהו כוכב הלכת הקרוב ביותר לשמש?", a: "חמה" },
    { q: "מהו הגז הנפוץ ביותר באוויר?", a: "חנקן" },
    { q: "מהו גוף האדם הגדול ביותר?", a: "עור" }
  ];
  let q = qs[rand(0, qs.length - 1)];
  currentAnswer = q.a;
  return q.q;
}

// פונקציה עזר
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

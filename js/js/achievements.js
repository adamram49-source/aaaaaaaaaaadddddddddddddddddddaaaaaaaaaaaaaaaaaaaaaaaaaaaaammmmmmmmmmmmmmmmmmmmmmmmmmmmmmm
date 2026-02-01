import { user } from "./user.js";

export function checkAchievements() {
  if (user.score >= 50 && !user.achievements.includes("מתחיל")) user.achievements.push("מתחיל");
  if (user.level >= 3 && !user.achievements.includes("מתקדם")) user.achievements.push("מתקדם");
  if (user.level >= 5 && !user.achievements.includes("אלוף")) user.achievements.push("אלוף");
}

export function renderAchievements(container) {
  container.innerHTML = "";
  user.achievements.forEach(a => {
    container.innerHTML += `<li>${a}</li>`;
  });
}

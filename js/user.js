export let user = {
  name: "",
  age: 0,
  subject: "math",
  score: 0,
  level: 1,
  history: [],
  achievements: []
};

// שמירה ב-localStorage
export function saveUser() {
  localStorage.setItem("smartCoach", JSON.stringify(user));
}

// טעינה
export function loadUser() {
  const data = localStorage.getItem("smartCoach");
  if (data) user = JSON.parse(data);
}

export const subjects = ["math", "english", "science"];

// מחזיר את שם המקצוע בעברית
export function subjectName(sub) {
  if (sub === "math") return "מתמטיקה";
  if (sub === "english") return "אנגלית";
  if (sub === "science") return "מדעים";
  return sub;
}

// החלפת מקצוע
export function switchSubject(current) {
  let index = subjects.indexOf(current);
  index = (index + 1) % subjects.length;
  return subjects[index];
}

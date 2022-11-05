function removeExclamationMarks(s) {
  return s.split("").filter(e => e !== '!').join("");
}
function isToday(date) {
  const now = new Date();
  return String(date).substring(0, 13) === String(now).substring(0, 13)
}
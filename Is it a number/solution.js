function isDigit(s) {
  if (s === '' || s === ' ') return false
  return !isNaN(+s)
}
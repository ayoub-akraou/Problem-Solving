function parseF(s) {
  return s === 0 ? 0 : isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s);
}
function findShort(s) {
  return Math.min(...s.split(" ").map(e => e.length));
}
function findDifference(a, b) {
  //loading...
  return Math.abs(a.reduce((x, y) => x*y) - b.reduce((x, y) => x*y))
}
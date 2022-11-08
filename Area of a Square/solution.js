function squareArea(A){
  const R = 4 * A / (2 * Math.PI)
  return +(R ** 2).toFixed(2)
}
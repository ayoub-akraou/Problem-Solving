function arrayMadness(a, b) {
  const squaresSum = a.reduce((a, b) => a + (b ** 2), 0);
  const cubicSum = b.reduce((a, b) => a + (b ** 3), 0);
  return squaresSum > cubicSum
}
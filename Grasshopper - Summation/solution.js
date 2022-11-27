var summation = function (num) {
  return Array(num).fill(0).map((e, i) => i + 1).reduce((a, b) => a + b)
}
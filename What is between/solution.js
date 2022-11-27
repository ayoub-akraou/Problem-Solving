function between(a, b) {
  const length = Math.abs(b - a) + 1
  return Array(length).fill("_").map((e, i) => i + a)
}
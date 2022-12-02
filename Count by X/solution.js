function countBy(x, n) {
  return Array(n).fill("_").map((e, i) => x * (i + 1));
}
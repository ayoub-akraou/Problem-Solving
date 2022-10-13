function expressionMatter(a, b, c) {
  const arr = [];
  arr.push(a * b * c);
  arr.push(a * (b + c));
  arr.push((a + b) * c);
  arr.push(a + b + c);
  return Math.max(...arr)
}
function sumOfMinimums(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
}
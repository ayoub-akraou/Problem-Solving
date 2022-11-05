function find_average(array) {
  if (array.length < 1) return 0;
  return array.reduce((a, b) => a + b) / array.length;
}
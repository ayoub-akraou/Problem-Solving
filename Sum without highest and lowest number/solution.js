function sumArray(array) {
  if (!array || array.length <= 2)
    return 0;
  array.splice(array.indexOf(Math.min(...array)), 1);
  array.splice(array.indexOf(Math.max(...array)), 1);
  return array.reduce((a, b) => a + b, 0);
}
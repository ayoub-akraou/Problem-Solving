function positiveSum(arr) {
  const positiveNum = arr.filter(e => e > 0);
  return positiveNum.length ? positiveNum.reduce((a, b) => a + b) : 0
}
function mergeArrays(arr1, arr2) {
  let unique = new Set(arr1.concat(arr2));
  return [...unique].sort((a, b) => a - b);
}
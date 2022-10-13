function sumOfDifferences(arr) {     
  let result = 0;
  if (arr.length <= 1) return 0;
  arr.sort((a,b)=> a - b)
  for (let i = arr.length - 1; i > 0; i--) {
    result += (arr[i] - arr[i - 1]); 
  }
  return result;
}
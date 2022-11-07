function removeEveryOther(arr){
  return arr.filter((e, i) => (i+1) % 2 !== 0)
}
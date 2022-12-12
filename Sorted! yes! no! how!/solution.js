function isSortedAndHow(array) {
  const ascending = array.join("") === array.slice().sort((a, b) => a - b).join("") 
  const descending = array.join("") === array.slice().sort((a, b) => b - a).join("") 
  return  ascending ? "yes, ascending" : descending ? "yes, descending" : "no"
}
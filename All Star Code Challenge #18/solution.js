function strCount(str, letter){  
  if(str.indexOf(letter) === -1) return 0
  let count = 0;
  str.split("").forEach(e => e === letter ? count++ : "")
  return count 
}

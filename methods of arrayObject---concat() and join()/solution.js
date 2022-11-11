function bigToSmall(arr){
  return String(arr).split(",").sort((a,b) => b -a).join(">")
  
}
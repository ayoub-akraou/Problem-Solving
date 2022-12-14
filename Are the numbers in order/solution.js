function inAscOrder(arr){
  return arr.slice().sort((a,b) => a-b).join("") === arr.join("");
}
function getRealFloor(n) {
  if(n > 0) return n < 13 ? n - 1 : n - 2;
  if(n === 0) return 0
  else return n 
 }
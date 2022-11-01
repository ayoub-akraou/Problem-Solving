function squareOrSquareRoot(array) {
  return array.map((e)=> Number.isInteger((Math.sqrt(e))) ? Math.sqrt(e): e**2);  
}
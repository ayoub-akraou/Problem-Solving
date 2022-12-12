function oddOrEven(array) {
  if(!array[0]) array[0] = 0
   return array.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd"
}
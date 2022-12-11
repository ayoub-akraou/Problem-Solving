function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  console.log(arguments)
  return Math.trunc(Math.sqrt(Array.from(arguments).reduce((a, b) => a + (b * b), 0)) / 2)
}
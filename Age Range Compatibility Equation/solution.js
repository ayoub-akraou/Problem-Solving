function datingRange(age){
  if(age <= 14) return  Math.trunc(age - 0.10 * age) + "-" +  Math.trunc(age + 0.10 * age)
  return Math.trunc(age/2 + 7) + "-" + Math.trunc((age - 7) * 2)
}
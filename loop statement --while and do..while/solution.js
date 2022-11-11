function padIt(str,n){
// i don't want to use while
  return "*".repeat(Math.ceil(n / 2)) + str +"*".repeat(Math.floor(n / 2))
}
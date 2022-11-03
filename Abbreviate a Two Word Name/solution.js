function abbrevName(name){
// first solution
  return (name[0] +  "." + name[name.indexOf(" ") + 1]).toUpperCase()
// second solution
  // const helper = name.split(" ").map(e => e.toUpperCase())
  // return helper[0][0] + "." + helper[1][0]
//  third solution
  // return `${name[0]}.${name.split("").splice(name.indexOf(" ") + 1, 1)}`.toUpperCase()
}
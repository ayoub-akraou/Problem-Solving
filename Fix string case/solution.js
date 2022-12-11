function solve(s){
  const A = s.split("").filter(e => e === e.toUpperCase()).join("")
  const a = s.split("").filter(e => e === e.toLowerCase()).join("")
  return A.length > a.length ? s.toUpperCase() : s.toLowerCase();
}
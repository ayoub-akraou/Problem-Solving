function noBoringZeros(n) {
  const x = String(n).split("").reverse()
  if(x.length === 1) return n
  for(let i = 0; i < x.length; i++) {
    if(x[i] !== "0") return Number(x.slice(i).reverse().join(""))
  }
}
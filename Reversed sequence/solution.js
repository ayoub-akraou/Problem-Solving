const reverseSeq = n => {
  return [...Array(n)].map((e,i)=> i + 1).reverse()
}
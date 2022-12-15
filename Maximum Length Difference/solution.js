function mxdiflg(a1, a2) {
  if(!a1.length || !a2.length) return -1
  let A1 = a1.map(e => e.length)
  const maxA1 = Math.max(...A1)
  const minA1 = Math.min(...A1)
  let A2 = a2.map(e => e.length)
  const maxA2 = Math.max(...A2)
  const minA2 = Math.min(...A2)
  return maxA1 - minA2 > maxA2 - minA1 ? maxA1 - minA2 : maxA2 - minA1;
}
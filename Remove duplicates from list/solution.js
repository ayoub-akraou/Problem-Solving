function distinct(a) {
  if( a.length < 2) return a
  const set = new Set(a)
  return [...set];
}
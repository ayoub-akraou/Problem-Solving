function stringy(size) {
  const arr = Array(Math.trunc(size / 2)).fill("10")
  if(size % 2 !== 0) arr.push("1")
  return arr.join("")
}
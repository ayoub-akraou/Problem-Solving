function monkeyCount(n) { 
  return Array(n).fill("_").map((e, i) => i + 1)
}
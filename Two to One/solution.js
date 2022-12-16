function longest(s1, s2) {
  const characters = [...new Set([...s1.split(""), ...s2.split("")])].sort().join("")
  return characters
}
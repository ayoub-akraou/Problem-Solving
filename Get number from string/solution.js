function getNumberFromString(s) {
  return +(s.split("").filter(e => !Number.isNaN(+e) && e !== " ").join(""))
}

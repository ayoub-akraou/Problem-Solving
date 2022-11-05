function correct(string) {
  const helper = {
    0: "O",
    1: "I",
    5: "S"
  }
  return string.split("").map(e => helper[e] ? helper[e] : e).join("")
}
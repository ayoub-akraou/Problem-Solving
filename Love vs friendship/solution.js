function wordsToMarks(string){
  const alphabet = "_abcdefghijklmnopqrstuvwxyz"
  return string.split("").map(e => alphabet.indexOf(e)).reduce((a, b) => a + b)
}
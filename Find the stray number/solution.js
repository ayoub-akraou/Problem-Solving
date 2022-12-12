function stray(numbers) {
  const uniques = [...new Set(numbers)];
  return  uniques.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e))[0]
}
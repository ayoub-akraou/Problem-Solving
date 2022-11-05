function countPositivesSumNegatives(input) {
  if(!input || !input.length) return []
  const positivesCount = input.filter(e => e > 0).length
  if(positivesCount.length === input.length) return [positivesCount, 0]
  const nesgativesSum =  input.filter(e => e < 0).reduce((a, b) => a + b)
  return [positivesCount, nesgativesSum]
}
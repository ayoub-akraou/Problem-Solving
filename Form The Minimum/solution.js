function minValue(values){
  const uniques = [...new Set(values)].sort((a, b) => a - b)
  return +uniques.reduce((a, b) => a + b, "")
}
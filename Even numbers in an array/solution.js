function evenNumbers(array, number) {
  return array.filter(e=>e%2===0).slice(-number)
}
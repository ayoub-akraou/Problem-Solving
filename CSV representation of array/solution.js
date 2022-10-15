function toCsvText(array) {
  return array.map(e=>e.join(',')).join('\n')
}
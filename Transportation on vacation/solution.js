function rentalCarCost(d) {
  const off = d >= 7 ? 50 : d >= 3 ? 20 : 0
  return d * 40 - off
}
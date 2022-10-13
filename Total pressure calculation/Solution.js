solution= (M1, M2, m1, m2, V, T) => {
  const R= 0.082
  return ((m1 / M1 + m2 / M2) * R * (T + 273.15)) / V
}
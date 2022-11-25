function betterThanAverage(classPoints, yourPoints) {
  return yourPoints >= classPoints.reduce((a, b) => a + b, yourPoints) / (classPoints.length + 1);
}
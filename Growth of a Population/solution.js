function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 += Math.trunc(p0 * percent / 100) + aug;
    years++;
  }
  return years;
}
function digitize(n) {
  return String(n).split('').reverse().map(e=>+e);
}
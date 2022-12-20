function removeSmallest(numbers) {
  return numbers.filter((e, i) => i !== numbers.indexOf(Math.min(...numbers)));
}
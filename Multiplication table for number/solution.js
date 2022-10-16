function multiTable(number) {
  if (!(number >= 1 && number <= 10))
    return "Please enter a number in range of [1-10]";
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push( i + " * " + number + " = " + i * number );
  }
  return result.join("\n")
}
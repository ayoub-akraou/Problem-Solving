const flip = (direction, array) => {
  if (direction === "R") return array.sort((a, b) => a - b);
  if (direction === "L") return array.sort((a, b) => b - a);
  return console.log("Please anter a valid direction");
};

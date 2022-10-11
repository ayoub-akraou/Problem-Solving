function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf") + 1;
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${
    queue.length - wolfIndex
  }! You are about to be eaten by a wolf!`;
}
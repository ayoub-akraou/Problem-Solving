function duckDuckGoose(players, goose) {
  const length = players.length;
  let index;
  if(goose > length) {
    goose % length === 0 ? index = length - 1 : index = goose % length - 1
  } else index = goose - 1;
  return players[index].name
}

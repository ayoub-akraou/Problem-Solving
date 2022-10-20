function whoseMove(lastPlayer, win) {
  if (win) return lastPlayer;
  return lastPlayer === "black" ? "white" : "black";
}
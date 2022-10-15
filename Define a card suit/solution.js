function defineSuit(card) {
  const symbol = card[card.length - 1]
  switch(symbol) {
    case "♣": return "clubs"; break;
    case "♦": return "diamonds"; break;
    case "♥": return "hearts"; break;
    default : return "spades";
  }
}
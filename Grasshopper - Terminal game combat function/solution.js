function combat(ppg, damage) {
  return damage > ppg ? 0 : ppg - damage;
}
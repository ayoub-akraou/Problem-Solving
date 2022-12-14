function getMiddle(s){
  const l = s.length;
  const oddMiddle = s.substring(Math.trunc(l / 2), Math.ceil(l / 2));
  const pairMiddle = s.substring(l / 2 - 1, l / 2 + 1);
  return l % 2 === 0 ? pairMiddle : oddMiddle;
}
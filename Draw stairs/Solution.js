function drawStairs(n) {
  if(n === 1) return "I"
  let stairs = "";
  for (let i = 0; i < n; i++) {
    if(i !== n - 1) {
      stairs += " ".repeat(i) + "I\n";
    } else {
      stairs += " ".repeat(i) + "I";    
    }
  }
  return stairs;
}
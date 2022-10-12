function pillars(num_pill, dist, width) {
  if(!(num_pill >= 1 && dist >= 10 && dist <= 30 && width >= 10 && width <= 50)) 
    return "Please enter a valid data";
  if(num_pill === 1) return 0 
  return num_pill * (dist*100 + width) - dist * 100 - 2 * width;
}
function sumMul(n,m){
  if(m <= 0) return "INVALID";
  let sum = 0;
  for(let i = 1; ; i++) {
    if((n * i) >= m) break; 
    sum += n * i;
  }
  return sum;
}
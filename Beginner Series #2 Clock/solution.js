function past(h, m, s){
  const hoursToMilliseconds = h * 60 * 60 * 1000;
  const minutesToMilliseconds = m * 60 * 1000;
  const secondsToMilliseconds = s * 1000;
  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
}
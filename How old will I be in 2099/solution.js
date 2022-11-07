function  calculateAge(b, n) {
  const yearsOld = n - b;
  const years = Math.abs(yearsOld) > 1 ? "years" : "year";
  return yearsOld > 0 ? `You are ${yearsOld} ${years} old.` :
         yearsOld < 0 ? `You will be born in ${yearsOld * -1} ${years}.` :
         "You were born this very year!";
        
}
function nearestSq(n) {
   const Candidates = [];
   for (let i = n;; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
         Candidates.push(i);
         break;
      }
   }
   for (let i = n; i >= 0; i--) {
      if (Number.isInteger(Math.sqrt(i))) {
         Candidates.push(i);
         break;
      }
   }
   if (Math.abs(Candidates[0] - n) < Math.abs(Candidates[1] - n))
      return Candidates[0];
   return Candidates[1];
}
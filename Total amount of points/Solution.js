function points(games) {
   let result = 0;
   if (games.length !== 10) return "10 matches expected";
   for (const e of games) {
      if (!(e[0] >= 0 && e[0] <= 4 && e[2] >= 0 && e[2] <= 4))
         return "results must be in range of [0-4]";
      console.log(e[0], e[2]);
      if (e[0] > e[2]) {
         result += 3;
      } else if (e[0] < e[2]) {
         result += 0;
      } else {
         result += 1;
      }
   }
   return result;
}
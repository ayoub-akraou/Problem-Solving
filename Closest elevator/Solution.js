function elevator(left, right, call) {
   if (
      ![left, right, call].every(
         (e) => e >= 0 && e <= 2 && Number.isInteger(e)
      )
   )
      return "Please enter an integer in range [0-2]";
   if (Math.abs(left - call) < Math.abs(right - call)) {
      return "left";
   }
   return "right";
}
function basicOp(operation, v1, v2) {
   switch(operation) {
       case "+": return v1 + v2; break;
       case "-": return v1 - v2; break;
       case "/": return v1 / v2; break;
       default: return v1 * v2; break;
   }
}
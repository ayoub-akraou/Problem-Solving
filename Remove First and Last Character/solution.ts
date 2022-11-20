function removeChar(str){
// solution 1:
  // str = str.split("");
  // str.shift();
  // str.pop();
  // return str.join("")
// solution 2:
  // return str.substring(1, str.length - 1)
// solution 3:
  // return str.substr(1, str.length - 2)
//  solution 4:
  return str.slice(1,-1)
}
function isPalindrome(x) {
  return x.toUpperCase() === x.split("").reverse().join("").toUpperCase();
}
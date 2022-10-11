function sameCase(a, b){
   let regex = /^[a-zA-Z]+$/;
        if (regex.test(a) && regex.test(b)) {
          return ((a.toUpperCase() === a && b.toUpperCase()) ||
            (a.toLowerCase() === a && b.toLowerCase())) === b
            ? 1
            : 0;
        } else {
          return -1;
        }
}
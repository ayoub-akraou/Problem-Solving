function tripleTrouble(one, two, three) {
  return one.split('').map((e, i) => e + two[i] + three[i]).join('');
}
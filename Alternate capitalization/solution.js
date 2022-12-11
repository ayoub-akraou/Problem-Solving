function capitalize(s){
  const first = s.split("").map((e, i) => i % 2 !== 0 ? e : e.toUpperCase()).join("")
  const second = s.split("").map((e, i) => i % 2 === 0 ? e : e.toUpperCase()).join("");
  return [first, second]
};
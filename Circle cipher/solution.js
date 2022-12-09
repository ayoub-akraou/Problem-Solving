function encode(s) {
  const firstHalf = s.split('').slice(0, Math.ceil(s.length) / 2);
  const secondHalf = s.split('').slice(Math.trunc(s.length) / 2).reverse();
  const result = firstHalf.map((e, i) => [e, secondHalf[i]]).flat(1);
  secondHalf.length > firstHalf.length && result.push(secondHalf[secondHalf.length - 1])
  return result.join("");
}

function decode(s) {
  let firstHalf = ""
  let secondHalf = ""
  s.split("").forEach((e, i) => i % 2 === 0 ? firstHalf += e : secondHalf += e);
  const result = firstHalf + secondHalf.split("").reverse().join("")
  return result;
}
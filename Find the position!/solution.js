function position (letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const position = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${position}`;
}
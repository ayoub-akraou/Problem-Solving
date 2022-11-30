function DNAtoRNA(dna) {
  return dna.split('').map(e => e === "T" ? "U" : e).join('');
}
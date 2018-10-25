/* eslint "require-jsdoc": 0 */

export function DNAStrand(str) {
  let res = '';
  const dna = {
    G: ['G', 'C'],
    C: ['C', 'G'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };
  for (let i = 0; i<str.length; i++) {
    res+= dna[str[i]][1];
  }
  return res;
}

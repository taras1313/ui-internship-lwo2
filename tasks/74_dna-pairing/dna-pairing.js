/* eslint "require-jsdoc": 0 */


export function pairElement(str) {
  const strArr = str.split('');
  const dna = {
    G: ['G', 'C'],
    C: ['C', 'G'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };
  return strArr.map((el) => dna[el]);
}

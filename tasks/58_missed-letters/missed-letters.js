/* eslint "require-jsdoc": 0 */


export function findLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 1; i < alphabet.length; i++) {
    if (alphabet.charAt(0)!==str.charAt(0)) return undefined;
    if (str.charAt(i)!==alphabet.charAt(i)) return alphabet.charAt(i);
  }
}

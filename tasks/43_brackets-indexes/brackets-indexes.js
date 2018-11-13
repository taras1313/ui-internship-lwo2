/* eslint "require-jsdoc": 0 */

export function findCloseIndex(str, n) {
  if (str[n] !== '(') return -1;
  let howMuchAreOpen = 1;
  for (let i = n+1; i<str.length; i++) {
    if (str[i] === '(') howMuchAreOpen++;
    if (str[i] === ')') howMuchAreOpen--;
    if (howMuchAreOpen === 0) return i;
  }
  return -1;
}

/* eslint "require-jsdoc": 0 */

export function reverseStringInRange(str, arr) {
  let strCopy = str.split('');
  let chunk = str.slice(arr[0], arr[1]+1).split('').reverse().join('');
  strCopy.splice(arr[0], chunk.length, chunk);
  strCopy = strCopy.join('');
  return strCopy;
}

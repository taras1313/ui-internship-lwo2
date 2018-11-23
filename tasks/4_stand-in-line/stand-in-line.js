/* eslint "require-jsdoc": 0 */
export function nextInLine(arr, num) {
  arr.push(num);
  return arr.shift();
}

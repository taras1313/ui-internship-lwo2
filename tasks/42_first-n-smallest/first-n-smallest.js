/* eslint "require-jsdoc": 0 */

export function firstNSmallest(arr, n) {
  for (let i = 0; n!==arr.lengh; i++) {
    if (arr.length===n) break;
    if (n===0) return [];
    let theBiggest = Math.max(...arr);
    arr.splice(arr.lastIndexOf(theBiggest), 1);
  }
  return arr;
}

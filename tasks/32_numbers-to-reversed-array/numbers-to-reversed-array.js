/* eslint "require-jsdoc": 0 */

export function numberToReversedArray(n) {
  let num = n.toString().split('').reverse();
  return num.map((el) => {
    return Number(el);
  });
}

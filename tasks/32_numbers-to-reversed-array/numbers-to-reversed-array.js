/* eslint "require-jsdoc": 0 */

export function numberToReversedArray(n) {
  const reversedArr = n.toString().split('').reverse();
  return reversedArr.map((el) => {
    return Number(el);
  });
}

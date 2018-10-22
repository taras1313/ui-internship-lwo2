/* eslint "require-jsdoc": 0 */

export function sumAll(arr) {
  let res = 0;
  const biggest = Math.max(...arr);
  const smallest = Math.min(...arr);
  for (let i = smallest; i <= biggest; i++) {
    res += i;
  }
  return res;
}

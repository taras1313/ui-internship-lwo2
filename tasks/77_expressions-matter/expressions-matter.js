/* eslint "require-jsdoc": 0 */
export function expressionMatter(...args) {
  let arr = args.slice();
  if (arr.every((el) => el === 1)) return 3;
  let res1 = arr.reduce((a, e) => a * e, 1);
  let test = arr.splice(arr.indexOf(Math.max(...arr)), 1);
  let res2 = arr.reduce((a, e) => a + e, 0);
  return res1 > res2 * test ? res1 : res2 * test;
}

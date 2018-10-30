/* eslint "require-jsdoc": 0 */

export function factorialize(num) {
  let res = 1;
  for (let i = 1; i<=num; i++) {
    res*=i;
  }
  return res;
}

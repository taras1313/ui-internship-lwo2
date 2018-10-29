/* eslint "require-jsdoc": 0 */

export function sumPrimes(n) {
  let res = [2];
  let flag = true;
  for (let i = 3; i <= n; i += 2) {
    for (let j = i-1; j > 1; j--) {
      if (i % j === 0) flag = false;
    }
    if (flag) {
      res.push(i);
      flag = true;
    }
    flag = true;
  }
  return res.reduce((a, e) => a + e);
}

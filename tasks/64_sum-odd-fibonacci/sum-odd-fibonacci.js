/* eslint "require-jsdoc": 0 */

export function sumFibs(n) {
  const arr = [1, 1];
  let currNum = 2;
  for (let i = 2; i < n; i++) {
    currNum = arr[i - 1] + arr[i - 2];
    if (currNum > n) break;
    arr.push(currNum);
  }
  return arr.filter((el) => el % 2 !== 0).reduce((a, el) => a + el);
}

/* eslint "require-jsdoc": 0 */

export function minNumberToPrime(arr) {
  let sum = arr.reduce((accum, curr) => accum + curr);
  let flag = true;
  let counter = 0;
  let cond = true;
  while (cond) {
    for (let i = sum-1; i>2; i--) {
      if (sum%i===0) {
        flag = false;
      }
    }
    if (flag === false) {
      sum++;
      counter++;
      flag = true;
    } else {
      break;
    }
  }
  return (counter);
}

/* eslint "require-jsdoc": 0 */

export function minNumberToPrime(arr) {
  let sum = arr.reduce((accum, curr) => accum + curr);
  let counter = 0;
  while (!isPrime(sum)) {
    sum++;
    counter++;
  }
  return counter;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}


/* eslint "require-jsdoc": 0 */

function primArr(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;
}
export function sumPrimeIndexedElements(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (primArr(i)) sum += arr[i];
  }
  return sum;
}


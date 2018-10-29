/* eslint "require-jsdoc": 0 */
function primArr(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;
}
export function numPrimorial(n) {
  const newArr = [];
  for (let i = 2; n !== newArr.length; i++) {
    if (primArr(i)) newArr.push(i);
  }
  return newArr.reduce((a, e) => a * e);
}

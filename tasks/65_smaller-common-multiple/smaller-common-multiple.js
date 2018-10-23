/* eslint "require-jsdoc": 0 */

export function smallestCommons(arr) {
  let range = [];
  arr.sort((a, b) => a-b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  let res = 1;
  for (let i = 0; ;i++) {
    if (range.every((el) => res % el === 0)) return res;
    else res++;
  }
}

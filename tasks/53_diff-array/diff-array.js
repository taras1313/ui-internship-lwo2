/* eslint "require-jsdoc": 0 */


export function diffArray(arr1, arr2) {
  let fromFirst = arr1.filter((el) => arr2.indexOf(el) === -1);
  let fromSecond = arr2.filter((el) => arr1.indexOf(el) === -1);
  return fromFirst.concat(fromSecond);
}

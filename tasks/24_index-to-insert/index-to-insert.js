/* eslint "require-jsdoc": 0 */

export function getIndexToInsert(arr, val) {
  arr.push(val);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(val);
}


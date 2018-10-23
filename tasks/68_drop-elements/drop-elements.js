/* eslint "require-jsdoc": 0 */

export function dropElements(arr, callback) {
  let resArr = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (callback(arr[i])) {
      resArr = arr.splice(i);
    }
  }
  return resArr;
}

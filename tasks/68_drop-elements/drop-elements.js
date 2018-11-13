/* eslint "require-jsdoc": 0 */

export function dropElements(arr, callback) {
  let resArr = [];
  let arrClone = arr.slice();
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (callback(arrClone[i])) {
      resArr = arrClone.splice(i);
    }
  }
  return resArr;
}

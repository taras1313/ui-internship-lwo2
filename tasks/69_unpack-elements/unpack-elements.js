/* eslint "require-jsdoc": 0 */

export function unpackArray(arr, res = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && !arr[i].length) continue;
    if (Array.isArray(arr[i])) {
      unpackArray(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}


/* eslint "require-jsdoc": 0 */

export function maxProduct(arr) {
  let res = arr[0]*arr[1];
  const l = arr.length;
  for (let i = 1; i<l; i++) {
    if (res<arr[i]*arr[i+1]) res = arr[i]*arr[i+1];
  }
  return res;
}

/* eslint "require-jsdoc": 0 */

export function arrayLeaders(arr) {
  const res = [];
  for (let i = 0; i< arr.length; i++) {
    let curr = 0;
    for (let j = i+1; j<arr.length; j++) {
      if (i!==arr.length-1) {
        curr+= arr[j];
      } else {
        curr = arr[i];
      }
    }
    if (arr[i]>curr) res.push(arr[i]);
  }
  return res;
}

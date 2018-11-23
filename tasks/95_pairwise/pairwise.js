/* eslint "require-jsdoc": 0 */

export function pairwise(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        arr[j] = NaN;
        arr[i] = NaN;
        result.push(i + j);
        break;
      }
    }
  }
  return result.length === 0 ? 0 : result.reduce((a, e) => a + e);
}

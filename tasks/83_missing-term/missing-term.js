/* eslint "require-jsdoc": 0 */
export function findMissing(arr) {
  /* eslint-disable-next-line */
  const step = arr[1] - arr[0] > arr[arr.length - 1] - arr[arr.length - 2] ? arr[1] - arr[0] : arr[arr.length - 1] - arr[arr.length - 2];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (curr - step !== arr[i - 1] && i !== 0) return curr - step;
  }
}

/* eslint "require-jsdoc": 0 */

export function maxTripletSum(arr) {
  /* eslint-disable-next-line */
  const unique = [...new Set(arr)];
  unique.sort((a, b) => {
    return b - a;
  });
  return unique.slice(0, 3).reduce((a, e) => a+e);
}

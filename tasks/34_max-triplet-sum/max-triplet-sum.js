/* eslint "require-jsdoc": 0 */

export function maxTripletSum(arr) {
  /* eslint-disable-next-line */
  let unique = [...new Set(arr)];
  unique.sort((a, b) => {
    return b - a;
  });
  let res = [];
  for (let i = 0; i<3; i++) {
    res.push(unique[i]);
  }
  return res.reduce((acc, curr) => {
    return acc+curr;
  });
}

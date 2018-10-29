/* eslint "require-jsdoc": 0 */

export function humanYearsCatYearsDogYears(n) {
  let result = [n, 15, 15];
  for (let i = 1; i<n; i++) {
    if (i === 1) result[1] += 9, result[2] += 9;
    else result[1] += 4, result[2] += 5;
  }
  return result;
}

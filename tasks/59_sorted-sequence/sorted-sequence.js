/* eslint "require-jsdoc": 0 */


export function uniteUnique(...arrs) {
  let unique = [];
  for (let i = 0; i<arrs.length; i++) {
    unique.push(...arrs[i]);
  }
  /* eslint-disable-next-line */
  return [...new Set(unique)];
}

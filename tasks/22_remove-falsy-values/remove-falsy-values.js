/* eslint "require-jsdoc": 0 */

export function removeFalsyValues(arr) {
  return arr.filter( (el) => Boolean(el));
}

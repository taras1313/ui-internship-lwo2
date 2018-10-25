/* eslint "require-jsdoc": 0 */


export function deepClone(obj) {
  const copy = JSON.parse(JSON.stringify(obj));
  return copy;
}

/* eslint "require-jsdoc": 0 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

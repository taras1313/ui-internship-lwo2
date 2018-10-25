/* eslint "require-jsdoc": 0 */

export function firstNSmallest(arr, n) {
  let arrClone = [...arr];
  if (!n > arrClone.length) return undefined;
  while (arrClone.length !== n) {
    arrClone.splice(arrClone.lastIndexOf(Math.max.apply(null, arrClone)), 1);
  }
  return arrClone;
}

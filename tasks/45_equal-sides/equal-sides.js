/* eslint "require-jsdoc": 0 */
export function findEqualIndex(arr) {
  let resI = -1;
  if (arr===[]) return -1;
  const l = arr.length;
  for (let i = 0, j = 0; i < l; i++) {
    let currentChunk = arr.slice(j, i+1).reduce((a, e)=>a+e, 0);
    let restArr = arr.slice(i+2).reduce((a, e)=>a+e, 0);
    if (currentChunk === restArr) return i+1;
  }
  return resI;
}

/* eslint "require-jsdoc": 0 */

export function findFriend(arr) {
  return arr.filter((el, i, a) =>
    (el === 'red' && (a[i+1]==='blue' && a[i+2]==='blue')) ||
    (el === 'red' && (a[i-1]==='blue' && a[i+1]==='blue')) ||
    (el === 'red' && (a[i-1]==='blue' && a[i-2]==='blue'))).length;
}

/* eslint "require-jsdoc": 0 */

export function uniqueInOrder(el) {
  let elClone = el.slice();
  if (typeof elClone ==='string') {
    elClone = elClone.split('');
  }
  for (let i = 0; i < elClone.length; ) {
    if (elClone[i] === elClone[i-1]) {
      elClone.splice(i, 1);
    } else {
      i++;
    }
  }
  return elClone;
}

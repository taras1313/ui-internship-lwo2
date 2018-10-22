/* eslint "require-jsdoc": 0 */

export function uniqueInOrder(el) {
  if (typeof el ==='string') {
    el = el.split('');
  }
  for (let i = 0; i<el.length-1; ) {
    if (el[i]===el[i+1]) {
      el.splice(i, 1);
    } else {
      i++;
    }
  }
  return el;
}

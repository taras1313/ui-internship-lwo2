/* eslint "require-jsdoc": 0 */

export function abbreviated(str) {
  let strArr = str.split(' ');
  if (strArr.length === 1) return str;
  for (let i = 1; i < strArr.length; i++) {
    let curr = strArr[i].split('');
    curr.splice(1, curr.length, '.');
    strArr.splice(i, 1, curr.join(''));
  }
  return strArr.join(' ');
}

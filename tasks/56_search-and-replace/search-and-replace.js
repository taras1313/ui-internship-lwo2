/* eslint "require-jsdoc": 0 */

export function myReplace(str, old, newstr) {
  let strArr = str.split(' ');
  if (old[0].toUpperCase() === old[0]) {
    newstr = newstr.split('');
    newstr[0] = newstr[0].toUpperCase();
    newstr = newstr.join('');
  }
  let oldIndex = strArr.indexOf(old);
  strArr.splice(oldIndex, 1, newstr);
  return strArr.join(' ');
}


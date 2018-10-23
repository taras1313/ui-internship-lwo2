/* eslint "require-jsdoc": 0 */

export function insert(str, content, i = 0) {
  let strArr = str.split('');
  if (!i) {
    strArr.unshift(content);
    return strArr.join('');
  } else {
    strArr.splice(i, strArr[i], content);
    return strArr.join('');
  }
}

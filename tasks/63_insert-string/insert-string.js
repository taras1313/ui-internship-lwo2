/* eslint "require-jsdoc": 0 */

export function insert(str, content, i = 0) {
  const strArr = str.split('');
  if (i === 0) {
    strArr.unshift(content);
    return strArr.join('');
  } else {
    strArr.splice(i, strArr[i], content);
    return strArr.join('');
  }
}

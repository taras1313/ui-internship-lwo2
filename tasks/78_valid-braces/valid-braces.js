/* eslint "require-jsdoc": 0 */
export function validBraces(str) {
  let strCopy = str;
  while (strCopy.indexOf('[]') !== -1 ||
  strCopy.indexOf('{}') !== -1 ||
  strCopy.indexOf('()') !== -1) {
    strCopy = strCopy.replace('[]', '').replace('{}', '').replace('()', '');
  }
  return strCopy.length === 0;
}

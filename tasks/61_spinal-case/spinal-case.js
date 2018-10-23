/* eslint "require-jsdoc": 0 */

export function spinalCase(str) {
  let strArr = str.split('');
  let res = '';
  strArr[0] = strArr[0].toLowerCase();
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].match(/[A-Z,a-z]/)) {
      res += '-';
      strArr[i + 1] = strArr[i + 1].toLowerCase();
      continue;
    }
    if (strArr[i].match(/[A-Z]/) && res[i] !== '-') res += '-' + strArr[i];
    else res += strArr[i];
  }
  return res.toLowerCase();
}

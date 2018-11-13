/* eslint "require-jsdoc": 0 */

export function repeatStringNumTimes(str, times) {
  let newStr = '';
  for (let i = 0; i<times; i++) {
    newStr+=str;
  }
  return newStr;
}

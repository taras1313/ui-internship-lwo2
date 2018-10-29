/* eslint "require-jsdoc": 0 */

export function swapCases(str) {
  const strArr = str.split('');
  return strArr.map((el)=>{
    if (el !== ' ') {
      if (el === el.toLowerCase()) {
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    }
    return ' ';
  }).join('');
}

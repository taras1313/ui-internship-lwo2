/* eslint "require-jsdoc": 0 */
export function trimWhiteSpaces(str) {
  let arr = str.split('');
  arr.forEach((el, i) => {
    if (el === ' ') {
      arr[i] = '';
    }
  });
  arr = arr.join('');
  return arr;
}


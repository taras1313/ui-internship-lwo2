/* eslint "require-jsdoc": 0 */

export function binaryDecode(bin) {
  let res = '';
  let binArr;
  if (!bin) {
    return res;
  } else {
    binArr = bin.split(' ');
  }
  binArr.forEach((el) => {
    const currToText = parseInt(el, 2);
    res += String.fromCharCode(currToText);
  });
  return res;
}

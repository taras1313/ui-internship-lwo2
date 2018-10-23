/* eslint "require-jsdoc": 0 */

export function binaryEncode(text) {
  let res = '';
  if (!text) return res;
  let textArr = text.split(' ');
  textArr.forEach((el) => {
    let currToText = el.split('');
    let toCharNum = currToText.map((el) => {
      return '0'+el.charCodeAt().toString(2);
    });
    res += toCharNum.join(' ')+' 00100000 ';
  });
  return res;
}

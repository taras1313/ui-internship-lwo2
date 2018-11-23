/* eslint "require-jsdoc": 0 */
export function binaryEncode(text) {
  if (!text) return '';
  let textArr = text.split('');
  return textArr.map((el) => {
    let currChar;
    if (Number(el)) currChar = el.charCodeAt(0).toString(2);
    else currChar = el.charCodeAt(el).toString(2);
    let currLength = currChar.length;
    const x = '0';
    const y = 8;
    return `${x.repeat(y - currLength)}${currChar}`;
  }).join(' ');
}

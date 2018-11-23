/* eslint "require-jsdoc": 0 */

export function rot13Encoder(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let copyStr = str.slice().toLowerCase().split('');
  let res = '';
  for (let i = 0; i < copyStr.length; i++) {
    if (copyStr[i]===' ') {
      res+=' ';
      continue;
    } else if (!copyStr[i].match(/[a-z]/)) {
      res+=copyStr[i];
      continue;
    }
    let curr = copyStr[i];
    let currI = alph.indexOf(curr);
    let newI = currI + 13;
    if (newI > 25) newI = newI - 26;
    if (newI < 0) newI = newI + 26;
    res += alph[newI];
  }
  return (res.toUpperCase());
}

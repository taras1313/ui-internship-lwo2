/* eslint "require-jsdoc": 0 */


export function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i<str.length; i++) {
    let capitalized = str[i].charAt(0).toUpperCase();
    let temp = str[i].split('');
    temp[0] = capitalized;
    str[i] = temp.join('');
  }
  return str.join(' ');
}

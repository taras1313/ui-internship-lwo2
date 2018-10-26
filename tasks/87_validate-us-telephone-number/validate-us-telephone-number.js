/* eslint "require-jsdoc": 0 */
export function telephoneCheck(num) {
  /* eslint max-len: [ "error", { "code" : 100 }] */
  const regExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/im;
  return num.match(regExp) ? true : false;
}

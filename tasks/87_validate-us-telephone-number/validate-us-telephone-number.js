/* eslint "require-jsdoc": 0 */
export function telephoneCheck(num) {
  /* eslint-disable-next-line */
  const regExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
  return regExp.test(num);
}

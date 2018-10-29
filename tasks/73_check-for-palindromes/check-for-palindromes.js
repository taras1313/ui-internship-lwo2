/* eslint "require-jsdoc": 0 */
export function palindrome(str) {
  const strLow = str.toLowerCase()
      .split('')
      /* eslint-disable-next-line */
      .filter((el) => !el.match(/[\s-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/))
      .join('');
  const strCompare = str.toLowerCase()
      .split('')
      /* eslint-disable-next-line */
      .filter((el) => !el.match(/[\s-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/))
      .reverse()
      .join('');
  return strLow === strCompare;
}

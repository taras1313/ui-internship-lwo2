/* eslint "require-jsdoc": 0 */

export function stringExpansion(str) {
  const strArr = str.split('');
  let expansed = '';
  let defaultRepeater = 1;
  strArr.forEach((el) => {
    if (Number(el)) defaultRepeater = Number(el);
    else if (!Number(el)) expansed += el.repeat(defaultRepeater);
  });
  return expansed;
}

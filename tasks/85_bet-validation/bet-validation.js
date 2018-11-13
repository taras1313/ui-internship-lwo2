/* eslint "require-jsdoc": 0 */
/* eslint-disable-next-line */
export function validate_bet(arr, str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
  /* eslint-disable-next-line */
    if (strArr[i] === ';' || strArr[i] === ':' || strArr[i] === '.') return 'None';
  }
  strArr = strArr.filter((el) => Number(el)
  && Number(el) <= 90 && Number(el) >= 1)
      .map((el) => Number(el))
      .sort((a, b) => a - b);
  if (strArr.length !== arr[0]) return 'None';
  return strArr;
}

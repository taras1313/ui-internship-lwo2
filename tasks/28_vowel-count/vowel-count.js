/* eslint "require-jsdoc": 0 */

export function getVowelCount(str) {
  let strSplitted = str.toLowerCase().split('');
  const vol = ['a', 'e', 'o', 'u', 'i'];
  let countOfVol = 0;
  strSplitted.forEach((el) => {
    if (vol.indexOf(el)!==-1) countOfVol++;
  });
  return countOfVol;
}

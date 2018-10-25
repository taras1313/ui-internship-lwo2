/* eslint "require-jsdoc": 0 */


/* eslint "require-jsdoc": 0 */

export function addedChar(str1, str2) {
  const getCharMap = (str) => str.split('').reduce((res, el) => {
    if (!res[el]) res[el] = 1;
    else res[el]++;
    return res;
  }, {});


  const obj1 = getCharMap(str1);
  const obj2 = getCharMap(str2);

  for (let el in obj2) {
    if (obj1[el] !== obj2[el] && obj2[el] >= 3) return el;
  }
}

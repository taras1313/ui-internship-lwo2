/* eslint "require-jsdoc": 0 */

export function arrayPlusArray(arr1, arr2) {
  let newArr = [];
  let l;
  let s;
  if (arr1.length>=arr2.length) l = arr1.slice(), s = arr2.slice();
  else if (arr1.length<=arr2.length) l = arr2.slice(), s = arr1.slice();
  l.forEach((el, i) => {
    if (l[i]+s[i]) {
      newArr.push(l[i]+s[i]);
    } else {
      newArr.push(l[i]);
    }
  });
  return newArr;
}


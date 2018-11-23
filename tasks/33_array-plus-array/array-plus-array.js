/* eslint "require-jsdoc": 0 */

export function arrayPlusArray(arr1, arr2) {
  let newArr = [];
  let longerArr;
  let smallerArr;
  if (arr1.length >= arr2.length) {
    longerArr = arr1.slice();
    smallerArr = arr2.slice();
  } else if (arr1.length <= arr2.length) {
    longerArr = arr2.slice();
    smallerArr = arr1.slice();
  }
  longerArr.forEach((el, i) => {
    if (smallerArr[i]) {
      newArr.push(longerArr[i]+smallerArr[i]);
    } else {
      newArr.push(longerArr[i]);
    }
  });
  return newArr;
}


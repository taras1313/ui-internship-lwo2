/* eslint "require-jsdoc": 0 */

export function sortByBits(arr) {
  const newArr = arr.slice();
  newArr.sort((a, b) => {
    const NumA = howMuchBits((a).toString(2));
    const NumB = howMuchBits((b).toString(2));
    if (NumA === NumB) {
      return a - b;
    } else {
      return NumA - NumB;
    }
  });
  return newArr;
}

function howMuchBits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] === 1) {
      count++;
    }
  }
  return count;
}

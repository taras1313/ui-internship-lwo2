/* eslint "require-jsdoc": 0 */

export function sortByBits(arr) {
  let bitsArray = [];
  let toBinary = arr.sort((a, b) => a - b).map((el) => el.toString(2));
  for (let i = 0; i<arr.length; i++) {
    bitsArray[i] = toBinary[i].split('').reduce((a, e) =>
      Number(a)+Number(e), 0);
  }
  let output = [];
  for (let i = 0; i<arr.length; i++) {
    let biggest = arr[bitsArray.lastIndexOf(Math.max(...bitsArray))];
    output.unshift(biggest);
    bitsArray[bitsArray.lastIndexOf(Math.max(...bitsArray))] = null;
  }
  return output;
}

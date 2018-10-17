/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  let temp = str.split('');
  let arr = [];
  for (let i = 0; i < temp.length; i++) {
    if (!isNaN(parseInt(temp[i]))) {
      arr.push(temp[i])
    }
  }
  let testArr = arr.map((el) => {
    return Number(el)
  })
  return testArr
}
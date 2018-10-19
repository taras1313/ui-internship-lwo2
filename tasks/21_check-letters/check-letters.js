/* eslint "require-jsdoc": 0 */

export function checkLetters(arr) {
  let flag = true;
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase().split('');
  second.every((el)=>{
    if (first.indexOf(el)===-1) flag = false;
    return flag;
  });
  return flag;
}

/* eslint "require-jsdoc": 0 */

export function destroyer(arr, ...arg) {
  return arr.filter((el)=>{
    return !arg.includes(el);
  });
}

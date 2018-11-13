/* eslint "require-jsdoc": 0 */
export function getAverage(arr) {
  return Math.floor(arr.reduce((accum, curr)=>{
    return accum+curr;
  })/arr.length);
}


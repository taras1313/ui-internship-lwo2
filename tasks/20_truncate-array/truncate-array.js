/* eslint "require-jsdoc": 0 */


export function truncateArray(arr,n) {
 return n === 0 ?  arr :  arr.slice(n);
}
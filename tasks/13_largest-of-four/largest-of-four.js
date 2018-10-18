/* eslint "require-jsdoc": 0 */

export function largestOfFour(arg) {
  let largest = [];
  for (let i = 0; i<arg.length; i++) {
    largest[i] = Math.max.apply(null, arg[i]);
  }
  return largest;
}

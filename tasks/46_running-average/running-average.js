/* eslint "require-jsdoc": 0 */

export function runningAverage() {
  let saver = 0;
  let counter = 0;
  return function(n) {
    counter++;
    return (saver+=n)/counter;
  };
}

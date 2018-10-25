/* eslint "require-jsdoc": 0 */

export function peopleInBus(arr) {
  let inBus = arr.reduce((accum, curr) => {
    return accum + curr[0];
  }, 0);
  let outTheBus = arr.reduce((accum, curr) => {
    return accum + curr[1];
  }, 0);
  return inBus - outTheBus;
}


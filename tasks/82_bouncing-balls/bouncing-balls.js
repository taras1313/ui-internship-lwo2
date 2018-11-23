/* eslint "require-jsdoc": 0 */

export function bouncingBall(height, coef, window) {
  let counter = 0;
  while (height > window) {
    counter += 2;
    height *= coef;
  }
  return counter - 1;
}


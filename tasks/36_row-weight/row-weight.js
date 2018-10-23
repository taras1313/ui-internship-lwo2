/* eslint "require-jsdoc": 0 */

export function rowWeights(arr) {
  let firstGroup = 0;
  let secondGroup = 0;
  arr.forEach((el, i) => {
    i % 2 === 0 ? firstGroup+=el : secondGroup+=el;
  });
  return [firstGroup, secondGroup];
}

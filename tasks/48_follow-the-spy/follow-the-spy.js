/* eslint "require-jsdoc": 0 */

export function followTheSpy(arr) {
  let initialPos = [arr[0][0], arr[0][1]];
  const l = arr.length;
  for (let i = 1; i<l; i++) {
    let nextCountry = arr.filter( (el) => el[0] === initialPos[i]);
    initialPos.push(nextCountry[0][1]);
  }
  return initialPos.join(', ');
}

/* eslint "require-jsdoc": 0 */
export function whatIsInAName(arr, obj) {
  const keys = Object.keys(obj);
  let res = [];
  res = arr.filter(function(el) {
    return keys.every(function(currKey) {
      return el.hasOwnProperty(currKey) && el[currKey] === obj[currKey];
    });
  });
  return res;
}

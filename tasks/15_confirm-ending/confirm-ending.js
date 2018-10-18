/* eslint "require-jsdoc": 0 */

export function confirmEnding(str, el) {
  let res = false;
  let elLength = el.length;
  let copy = str.substring(str.length-elLength, str.length);
  if (copy === el) {
    res = true;
  }
  return res;
}

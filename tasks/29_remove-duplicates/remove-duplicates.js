/* eslint "require-jsdoc": 0 */
export function removeDuplicates(arr) {
  /* eslint-disable-next-line */
  const unique = [...new Set(arr)];
  return unique;
}

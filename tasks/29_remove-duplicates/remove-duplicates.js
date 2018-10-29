/* eslint "require-jsdoc": 0 */
export function removeDuplicates(arr) {
  const unique = [...new Set(arr)];
  return unique;
}

/* eslint "require-jsdoc": 0 */

export function addTogether(...args) {
  if ([...args].some((el) => typeof el !== 'number')) return undefined;
  if ([...args].length === 2) return args[0] + args[1];
  return function(b) {
    if (typeof b !== 'number') return undefined;
    return args[0] + b;
  };
}

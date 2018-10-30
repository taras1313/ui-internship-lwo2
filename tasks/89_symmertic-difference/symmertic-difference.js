/* eslint 'require-jsdoc': 0 */
export function sym(...arg) {
  const arr = arg;
  function unique(first, second) {
    return first.filter((val) => {
      return !~second.indexOf(val);
    });
  }
  let res = arr.reduce((acc, cur) => {
    return [].concat(unique(acc, cur), unique(cur, acc))
        .filter((el, i, arr) => {
          return arr.indexOf(el) === i;
        });
  });
  return res.sort((a, b) => a - b);
}

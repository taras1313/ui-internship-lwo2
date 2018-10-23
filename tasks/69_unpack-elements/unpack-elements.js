/* eslint "require-jsdoc": 0 */
// i'll fix this one
export function unpackArray(arr) {
  let notFiltred = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && arr[i].length) {
      notFiltred.push(arr[i]);

      if (Array.isArray(notFiltred[i])) {
        let curr = notFiltred[i];
        curr = curr.toString().split(',');
        notFiltred.splice(i, 1);
        notFiltred = notFiltred.concat(curr);
      }
    } else notFiltred.push(arr[i]);
  }
  notFiltred = notFiltred.map((el) => {
    if (Number(el)) return Number(el);
    else return el;
  });
  let res = notFiltred.filter((el) => !Array.isArray(el));
  return res;
}

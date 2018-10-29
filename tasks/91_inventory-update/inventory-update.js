/* eslint "require-jsdoc": 0 */

export function updateInventory(curInv, newInv) {
  let res = [];
  res = res.concat(curInv, newInv);
  res.forEach((el, i) => {
    for (let j = i + 1; j < res.length - 1; j++) {
      if (el[1] === res[j][1]) {
        el[0] = el[0] + res[j][0];
        res.splice(j, 1);
      }
    }
  });
  res.sort((a, b) => a[1] > b[1]);

  return res;
}

/* eslint "require-jsdoc": 0 */

export function SimTime() {
  let arr = [];
  let i = 0;
  let curr = 0;
  this.update = function(n) {
    arr.push(n);
    this.result = arr[i];
    if (i > 0) this.result += (arr[arr.length - 1] - arr[i]) * this.mult;
    if (i === 0) this.result = n;
    if (i === -1) this.result = curr + this.mult;
  };
  this.setSpeed = function(n) {
    if (n < 2) {
      i = -1;
      this.mult = n;
      curr = this.result;
    } else {
      this.mult = n;
      i++;
    }
  };
  this.get = function() {
    return this.result || 0;
  };
}

/* eslint-disable-next-line */
String.prototype.camelCase = function() {
  let res = '';
  let isPrevSpace = false;
  const l = this.length;
  for (let i = 0; i<l; i++) {
    if (this[i]===' ') isPrevSpace = true;
    else if (isPrevSpace || i===0) {
      res+=this[i].toUpperCase(), isPrevSpace = false;
    } else res+=this[i];
  }
  return res;
};

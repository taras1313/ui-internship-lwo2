/* eslint "require-jsdoc": 0 */
export function convertHTML(str) {
  let res = str.split('');
  let obj = {
    '\'': '&apos;',
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
  };
  for (let i = 0; i<res.length; i++) {
    if (obj[res[i]]) res[i] = obj[res[i]];
  }
  return res.join('');
}

/* eslint "require-jsdoc": 0 */


export function translatePigLatin(str) {
  const vol = ['a', 'u', 'e', 'o', 'i'];
  let strSplitted = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (vol.indexOf(strSplitted[i]) === -1
    && vol.indexOf(strSplitted[i + 1]) !== -1) {
      let curr = strSplitted.splice(i, 1);
      strSplitted.push(curr + 'ay');
      break;
    } else if (vol.indexOf(strSplitted[i]) === -1
    && vol.indexOf(strSplitted[i + 1]) === -1) {
      let curr = strSplitted.splice(i, 2).join('');
      strSplitted.push(curr + 'ay');
      break;
    } else {
      strSplitted.push('way');
      break;
    }
  }
  return strSplitted.join('');
}

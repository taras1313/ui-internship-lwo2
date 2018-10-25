/* eslint "require-jsdoc": 0 */


export function convertToRoman(n) {
  let arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanian = ['I', 'IV', 'V', 'IX', 'X', 'XL',
    'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let res = '';
  let number = n;
  while (number > 0) {
    for (let i = 0; i < arabic.length; i++) {
      if (arabic[i] <= number && +arabic[i + 1] > number) {
        res += romanian[i];
        number -= arabic[i];
      }
    }
  }
  return res;
}

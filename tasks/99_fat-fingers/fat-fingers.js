export function fatFingers(str) {
  let strToArr = str.split('');
  let aIsPressed = false;
  strToArr.forEach((el, i, arr) => {
    if (el === 'a') {
      aIsPressed = !aIsPressed;
      arr.splice(i, 1);
    }
    if (aIsPressed) {
      arr[i] = arr[i].toUpperCase();
    }
  });
  return strToArr.join('');
}

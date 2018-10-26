/* eslint "require-jsdoc": 0 */

export function formatWorkingHours(INPUT_DATA) {
  if (!INPUT_DATA.length) return [];
  let result = [];
  const formatHours = (i, theSameTime, isRange) => {
    const obj = isRange ? INPUT_DATA[i] : INPUT_DATA[theSameTime[0]];
    return obj['day'].toUpperCase() +
    /* eslint max-len: [ "error", { "code" : 120 }] */
      (isRange ? ' - ' + INPUT_DATA[theSameTime[theSameTime.length - 1]]['day'].toUpperCase() : '') +
      ': ' + INPUT_DATA[theSameTime[0]]['from'] +
      ' - ' + INPUT_DATA[theSameTime[0]]['to'];
  };
  for (let i = 0; i < INPUT_DATA.length; i++) {
    let theSameTime = [INPUT_DATA.indexOf(INPUT_DATA[i])];
    let curr = INPUT_DATA[i];
    for (let j = i + 1; j < INPUT_DATA.length - 1; j++) {
      let from = curr['from'] === INPUT_DATA[j]['from'];
      let to = curr['to'] === INPUT_DATA[j]['to'];
      if (from && to) {
        theSameTime.push(INPUT_DATA.indexOf(INPUT_DATA[j]));
      }
    }
    const isRange = theSameTime.length > 1;
    result.push(
        formatHours(i, theSameTime, isRange)
    );
    if (isRange) i = theSameTime[theSameTime.length - 1];
  }
  let tempForSat = result.shift();
  result.splice(result.length - 1, 0, tempForSat);
  return result;
}

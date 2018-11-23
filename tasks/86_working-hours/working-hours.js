/* eslint "require-jsdoc": 0 */
export function formatWorkingHours(INPUT_DATA) {
  if (!INPUT_DATA.length) return [];
  let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  days = days.map((el) => {
    let curr = INPUT_DATA.find((e, i, arr) => e['day'] === el);
    return curr;
  });
  return days.reduce((acc, el, i, arr) => {
    let sameFromTime = [];
    for (let j = i; j < days.length; j++) {
      if (el.from === arr[j].from) {
        sameFromTime.push(arr[j]);
        delete days[j];
      } else {
        break;
      }
    }
    if (sameFromTime.length === 1) {
      /* eslint-disable-next-line */
      el = `${sameFromTime[0].day.toUpperCase()}: ${sameFromTime[0].from} - ${sameFromTime[0].to}`;
    } else if (sameFromTime.length > 1) {
      /* eslint-disable-next-line */
      el = `${sameFromTime[0].day.toUpperCase()} - ${sameFromTime[sameFromTime.length - 1].day.toUpperCase()}: ${sameFromTime[0].from} - ${sameFromTime[0].to}`
    }
    acc.push(el);

    return acc;
  }, []);
}

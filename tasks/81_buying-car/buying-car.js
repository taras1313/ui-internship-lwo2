/* eslint "require-jsdoc": 0 */
export function nbMonths(hasCash, newCar, plusMoney, perc) {
  if (hasCash >= newCar) {
    return [0, hasCash - newCar];
  }
  let mCounter = 0;
  let currMoney = 0;
  let startPriceNew = newCar;
  let startPriceOld = hasCash;
  let loses = perc;
  while ((currMoney + startPriceOld) < startPriceNew) {
    mCounter += 1;
    if (mCounter % 2 === 0) loses += 0.5;
    currMoney += plusMoney;
    startPriceOld -= startPriceOld * loses / 100;
    startPriceNew -= startPriceNew * loses / 100;
  }
  return [mCounter, Math.floor(currMoney + startPriceOld - startPriceNew)];
}

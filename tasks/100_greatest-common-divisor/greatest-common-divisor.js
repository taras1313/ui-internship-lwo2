export function greatestCommonDivisor(...args) {
  for (let i = Math.min(...args); i > 0; i--) {
    if (Math.min(...args) % i === 0 && Math.max(...args) % i === 0) {
      return i;
    }
  }
}

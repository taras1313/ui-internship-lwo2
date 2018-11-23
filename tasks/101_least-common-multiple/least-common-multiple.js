export function leastCommonMultiple(a, b) {
  for (let i = Math.max(a, b); ; i++) {
    if (i % a === 0 && i % b === 0) return i;
  }
}

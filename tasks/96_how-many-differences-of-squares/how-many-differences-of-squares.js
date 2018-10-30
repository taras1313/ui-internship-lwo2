export function squares(n) {
  let counter = 0;
  for (let i = 2; i<=n; i+=4) {
    counter++;
  }
  return n-counter;
}

/* eslint "require-jsdoc": 0 */

// export function arrayChunks(arr, count) {
// //   let newArr = [];
// //   let currentChunk = [];
// //   let l = Math.ceil(arr.length/count);
// //   for (let i = 0; i<count; i++) {
// //     currentChunk[i] = [];
// //     currentChunk[i] = arr.slice(0, l);
// //     arr.splice(0,l);
// //     newArr.push(currentChunk[i]);
// //   }
// //   return newArr;
// // }
export function arrayChunks(arr, count) {
  let arrCopy = arr.slice();
  let newArr = [];
  for (let i = 0; i < Math.ceil(arr.length / count); i++) {
    let curr = [];
    curr = arrCopy.splice(0, count);
    newArr[i] = curr;
  }
  return newArr;
}

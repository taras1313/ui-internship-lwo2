/* eslint "require-jsdoc": 0 */

export function findLongestWord (str) {
    let spl = str.split(' ');
    let lg = [];
    spl.forEach((el)=>{
        lg.push(el.length)
    })
    return Math.max.apply(null,lg)
}
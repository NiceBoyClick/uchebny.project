"use strict"
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
    let str = String(obj[elem]);
    if (str[0] === '1' || str[0] === '2') {
        sum += Number(str);
    }
}
console.log(sum);


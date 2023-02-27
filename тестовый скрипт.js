"use strict"
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i <= arr.length - 1; i++) {
    let keys = i + 1;
    let values = arr[i];
    obj[keys] = values;
}
console.log(obj);


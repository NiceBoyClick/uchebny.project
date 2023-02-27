"use strict"
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i <= arr.length - 1; i++) {
    let keys = arr[i];
    obj[keys] = i + 1;
}
console.log(obj);


"use strict"
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let key in obj) {
    obj2[obj[key]] = key;
}
console.log(obj2);








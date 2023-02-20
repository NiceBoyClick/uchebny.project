"use strict"
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        obj2[key] = obj[key];
    }
}
console.log(obj2)









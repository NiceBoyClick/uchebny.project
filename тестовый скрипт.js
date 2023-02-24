"use strict"
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}

console.log(sum);





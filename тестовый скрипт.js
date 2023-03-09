"use strict"
let num1 = 12345;
let arr1 = String(num1).split('');

let sum1 = 0;
for (let digit of arr1) {
    sum1 += +digit;
}

console.log(sum1);


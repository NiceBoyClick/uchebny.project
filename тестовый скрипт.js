"use strict"
let num = 12345;
let str = String(num);
let arr = str.split('');
let sum = 0;
for (let digit of arr) {
    sum += +digit;
}
console.log(sum);


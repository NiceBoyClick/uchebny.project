"use strict"
let num = [2, 13, 7, 18, 5, 3];
let sum = 0;
for (let i = 0; i <= num.length - 1; i++) {
    sum += num[i] / num.length;
}
console.log(sum)

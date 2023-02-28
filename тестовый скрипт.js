"use strict"
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}
console.log(sum);

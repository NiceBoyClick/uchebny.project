"use strict"
let res = sum([1, 2, 3, 4, 5]);

function sum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    return sum
}
console.log(res);

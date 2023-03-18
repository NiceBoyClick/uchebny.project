"use strict"
let arr = sum([1, 2, 3, 4, 5]);

function sum(arr) {
    let num = 0;

    for (let elem of arr) {
        num += elem;
    }

    return num;
}
console.log(arr);

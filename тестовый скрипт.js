"use strict"
let arr = [1, 2, 3, 4, 5];
let res = sum(arr);

function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}
console.log(res);

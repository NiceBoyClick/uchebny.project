"use strict"
function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));
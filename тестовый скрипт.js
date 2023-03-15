"use strict"
function func(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            return false;
        }
    }
    return true;
}
let arr = func([2, 4, 6, 8, 10]);
console.log(arr);
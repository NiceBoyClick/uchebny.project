"use strict"
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] === arr[i]) {
                return true;
            }
        }
    }
    return false;
}
let arr = func([2, 4, 6, 8, 8]);
console.log(arr);
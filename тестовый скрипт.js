"use strict"
let arr1 = getsum([1, 2, 3, 4, 5]);
function getsum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}
console.log(arr1);


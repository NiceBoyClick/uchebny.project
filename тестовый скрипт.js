"use strict"
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let subArr of arr) {
    for (let subsubArr of subArr) {
        for (let elem of subsubArr) {
            sum += elem;
        }
    }
}
console.log(sum);

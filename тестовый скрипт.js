"use strict"
let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let elem of arr) {
    sum += elem[0] + elem[1]
}
console.log(sum)

"use strict"
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        for (let n = 0; n < arr2[i][j].length; n++) {
            sum2 += arr2[i][j][n];
        }
    }
}
console.log(sum2);
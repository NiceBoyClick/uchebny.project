"use strict"
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

console.log(arr);

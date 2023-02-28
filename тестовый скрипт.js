"use strict"
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push([]);
        for (let n = 0; n < 5; n++) {
            arr[i][j].push(n + 1);
        }
    }
}
console.log(arr);

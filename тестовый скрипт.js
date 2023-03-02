"use strict"
let arr = [];
for (let i = 0, k = 1; i < 2; i++) {
    arr[i] = [];

    for (let j = 0;   j < 2; j++) {
        arr[i].push([]);

        for (let n = 0; n < 2; n++) {
            arr[i][j].push(k++);
        }
    }
}
console.log(arr);

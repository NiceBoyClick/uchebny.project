"use strict"
let arr = [2, -1, 6, 1, -4, 3];
let sum = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);

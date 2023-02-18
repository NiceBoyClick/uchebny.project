"use strict"
let sum = 0;
let res = 0;
for (let i = 1; i < 100; i++) {
    sum = sum + i;
    res = res + 1;
    if (sum > 100) {
        break;
    }
    console.log(i)
}
console.log(res)












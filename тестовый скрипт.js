"use strict"
let res = 0;

for (let i = 1; i <= 99; i += 1) {
    res += (i % 2 !== 0);
}

console.log(res);


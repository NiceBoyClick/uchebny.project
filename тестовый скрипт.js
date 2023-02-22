"use strict"
let arr = 'ddihhtyymeeeerll';
let count = {};

for (let elem of arr) {
    if (count[elem] === undefined) {
        count[elem] = 1;
    } else {
        count[elem]++;
    }
}

console.log(count);




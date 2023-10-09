'use strict';

let arr = [3, 3, 9, 9, 4, 4];

function func(arr) {
    return [...new Set(arr)];
}

console.log(func(arr));

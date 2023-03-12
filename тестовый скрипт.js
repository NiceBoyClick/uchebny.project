"use strict"
function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}
let res = round(sqrt(2))
console.log(res);
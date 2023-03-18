"use strict"
let num = '12345';
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
    let arr = num.split('');
    let sum = 0;

    for (let elem of arr) {
        sum += +elem;
    }
    return sum;
}

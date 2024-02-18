'use strict';

function squareDigits(num){
    let arr = String(num).split('');
    let arr2 = [];
    for(let elem of arr) {
        arr2.push(Math.pow(+elem, 2));
    }
    return Number(arr2.join(''));
}

console.log(squareDigits(9119));

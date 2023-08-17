'use Strict';

let array = [22, 33, 44, 55, 66, 77, 88];

function func(arr) {
    let sum = 0;
    let square = 0;
    for (let elem of arr) {
        square = Math.sqrt(elem);
        sum += Math.round(square);
    }
    return sum;
}

console.log(func(array));


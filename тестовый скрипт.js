'use Strict';

let array = [2, 33, 4, 55, -66, 7, -88];

function func(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (elem > 0 && elem < 10) {
            sum += elem;
        }
    }
    return sum;
}

console.log(func(array));


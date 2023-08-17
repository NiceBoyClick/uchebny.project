'use Strict';

let array = [22, 33, 44, 55, -66, -77, -88];

function func(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (elem > 0) {
            sum += elem;
        }
    }
    return sum;
}

console.log(func(array));


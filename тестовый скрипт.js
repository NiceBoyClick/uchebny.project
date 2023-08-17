'use Strict';

let array = [2, 3, 4, 5, 6, 7, 8];

function func(arr) {
    let sum = 0;
    let square = 0;
    for (let elem of arr) {
        square = elem * elem;
        sum += square;
    }
    return sum;
}


console.log(func(array));


'use Strict';

let arr = [1.456, 2.125, 3.32, 4.1, 5.34];

function func() {
    let arr2 = [];
    for (let elem of arr) {
        elem = elem.toFixed(1);
        arr2.push(elem);
    }
    return arr2;
}

console.log(func(arr));


'use Strict';

let arr = [
    100,
    200,
    300,
    400,
    500,
];

function func() {
    let arr2 = [];
    for (let elem of arr) {
        elem += elem / 100 * 10;
        arr2.push(elem);
    }
    return arr2;
}

console.log(func(arr));


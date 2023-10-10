'use strict';

let test = [
    [1, 2, 3],
    {a: 1, b: 2, c: 3},
    [3, 4, 5],
    {x: 1, y: 2, z: 3},
];

for (let elem of test) {
    console.log(Array.isArray(elem));
}
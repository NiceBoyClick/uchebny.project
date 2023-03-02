"use strict"
let obj = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}
let sum = 0;
for (let key in obj) {
    let subObj = obj[key];

    for (let subKey in subObj) {
        let subsubObj = subObj[subKey];

        for (let subsubKey in subsubObj) {
            sum += subsubObj[subsubKey];
        }
    }
}
console.log(sum);


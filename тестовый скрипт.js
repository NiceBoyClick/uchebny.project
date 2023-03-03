"use strict"
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);


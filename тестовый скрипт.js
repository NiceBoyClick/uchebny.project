"use strict"
let str = 'var_test_text';
let arr = str.split('_');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let result = arr.join('');
console.log(result);

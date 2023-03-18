"use strict"
function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num;
}
console.log(add(10));

"use strict"
function func(num) {
    let i = 0;
    while (true) {
        num /= 2;
        if (num < 10) {
            return i + 1;
        }
        i++;
    }
}
console.log( func(60) );
"use strict"
function func(num) {
    let str = String(num);
    if (str[0] % 2 != 0 && str[1] % 2 != 0) {
            return true;
        }
    return false;
}
console.log(func(23));
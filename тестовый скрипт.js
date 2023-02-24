"use strict"
let num = [2, 13, 7, 18, 5, 3, 0];
let flag = false;
for (let i = 0; i <= num.length; i++) {
    if (num[i] === 5) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}
if (flag === true) {
    console.log('+++')
} else {
    console.log('---')
}





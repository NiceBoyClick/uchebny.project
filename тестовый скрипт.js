"use strict"
let arr = 13;
let flag = true;
for (let i = 2; i <= arr / 2; i++) {
    console.log(i)
    if (arr % i == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log('+++');
} else {
    console.log('---');
}





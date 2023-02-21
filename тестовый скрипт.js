"use strict"
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}

if (flag == true) {
    console.log('+++');
} else {
    console.log('---');
}





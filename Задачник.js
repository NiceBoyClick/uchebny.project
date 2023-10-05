'use Strict';

let str = 'fjtuk6kd941';

function getNum(str) {
let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            console.log(i);
            break;
        }
    }
}

getNum(str);
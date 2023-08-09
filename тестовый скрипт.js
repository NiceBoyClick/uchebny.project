'use Strict';

function showLastLetter(number) {
    let arr = number.split('');

    return (+arr[0] + +arr[arr.length - 1]);
}

let result = showLastLetter("486");

console.log(+result);

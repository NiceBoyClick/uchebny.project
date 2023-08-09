'use Strict';

function showLastLetter(number) {
    let arr = number.split('');

    return (arr[arr.length - 1]);
}

let result = showLastLetter("48");

console.log(+result);

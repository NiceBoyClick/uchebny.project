'use Strict';

function func(number) {
    let arr = number.split('');
    let quantity = 0;

    for (let i = 0; i <= arr.length; i++) {
        quantity = i;
    }
    return (quantity);
}

let result = func('4456');

console.log(result);

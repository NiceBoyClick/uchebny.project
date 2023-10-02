'use Strict';

let num = '12,34,56';

function getSum(num) {
    let arr = num.split(',');
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    }
    return sum;
}

console.log(getSum(num));
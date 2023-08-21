'use Strict';

let num = 12345;
let str = String(num);

function func() {
    let sum = 0;
    let arr = str.split('');
    for (let elem of arr){
        sum += +elem;
    }
    return sum;
}

console.log(func());



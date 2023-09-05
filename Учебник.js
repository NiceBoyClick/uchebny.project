'use Strict';

let arr = [1, 3, 3];

let sym = Symbol();

arr[sym] = function () {
    let sum = 0;
    for (let elem of this) {
      sum += elem;
    }
    return sum;
};

arr.push(4, 4);

let sum = arr[sym]();
console.log(sum);
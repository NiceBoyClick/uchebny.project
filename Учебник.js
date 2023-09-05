'use Strict';

let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();

obj[sym] = function () {
    let date = new Date();
    console.log(date.getHours() + ':' + date.getMinutes());
};

obj[sym]();
console.log(obj);
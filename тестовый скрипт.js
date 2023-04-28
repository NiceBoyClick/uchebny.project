'use Strict';

let arr = [14, 23, 36, 41, 59];
let arrSqrt = [];

let result = arr.map(function(elem) {
  let sqr = Math.sqrt(elem).toFixed(1);
  return arrSqrt.push(sqr);
});

console.log(arrSqrt);


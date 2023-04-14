'use Strict';

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function test(num, func1, func2) {
  return func1(num) + func2(num);
}

let num = 3;
let result = test(num, square, cube);
console.log(result);
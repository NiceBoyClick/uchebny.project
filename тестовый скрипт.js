'use Strict';

let func = function(num1, num2) {
  return num1 + num2;
}

function test(param) {
  console.log(param(2, 3));
}
test(func);

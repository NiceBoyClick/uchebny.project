'use Strict';

let func1 = function() {
  return 1;
}
let func2 = function() {
  return -2;
}
let func3 = function() {
  return -3;
}

test(func1, func2, func3);

function test(func1, func2, func3) {
  console.log(func1(), func2(),  func3());
}
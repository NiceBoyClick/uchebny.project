'use Strict';

function func1() {
  return 3;
}
let func2 = func1;
console.log(func2() + func1());
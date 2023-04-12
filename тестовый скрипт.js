'use Strict';

function get1() {
  return 1;
}
function get2() {
  return 2;
}
function get3() {
  return 3;
}

test(get1, get2, get3);

function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}
'use Strict';

function func(num) {
  return num * num * num;
}

test(func);

function test(func) {
  console.log(func(3));
}
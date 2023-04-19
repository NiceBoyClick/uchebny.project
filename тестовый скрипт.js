'use Strict';

function func1() {
  return function () {
    return 1;
  };
}

function func2() {
  return function () {
    return 2;
  };
}

console.log(func1()() + func2()());
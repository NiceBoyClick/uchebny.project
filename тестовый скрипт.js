'use Strict';

test(
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
);

function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}
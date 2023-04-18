'use Strict';

function func(num1, num2) {

  function square(num) {
    return num * num;
  }

  function cube(num) {
    return num * num * num;
  }

  return square(num1) + cube(num2);
}

console.log(func(3, 2));
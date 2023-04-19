'use Strict';

function func1() {
  return function () {
    return function () {
      return function () {
        return function () {
          return '!';
        }
      }
    }
  }
};


console.log(func1()()()()());
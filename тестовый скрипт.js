'use Strict';

function test() {
  let num = 10;

  return function () {
    console.log(num);
    num--;
  }
}

let func = test();
func();
func();
func();

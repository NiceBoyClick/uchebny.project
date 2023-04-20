'use Strict';

function test() {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  }
}

let func = test();
func();
func();
func();

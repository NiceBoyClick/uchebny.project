'use Strict';

let func = (function () {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  }
})();

func();
func();
func();
func();
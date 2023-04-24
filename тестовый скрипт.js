'use Strict';

let func = (function () {
  let num = 1;
  return function () {
    if (num <= 5) {
      console.log(num);
      num++;
    } else {
      num = 1
      console.log(num);
      num++;
    }
  }
})();

func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
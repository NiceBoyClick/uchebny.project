'use Strict';

function test() {
  let num = 10;

  return function () {
    if (num >= 0) {
      console.log(num);
      num--;
    } else {
      console.log('отсчет окончен');
    }
  }
}

let func = test();
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
func();
func();

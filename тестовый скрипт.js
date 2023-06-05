'use Strict';

setInterval(timer, 1000);
let num = 100;

function timer() {
  if (num > 0) {
    console.log(num -= 1);
  }
}

'use Strict';

let timerId = setInterval(timer, 1000);
let num = 10;

function timer() {
  console.log(num--);
  if (num < 0) {
    clearInterval(timerId);
  }
}

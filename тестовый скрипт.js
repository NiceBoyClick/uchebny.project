'use Strict';

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;
let num = 100;

start.addEventListener('click', function() {
  timerId = setInterval(function() {
    console.log(num--)
    if (num < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

stop.addEventListener('click', function() {
  clearInterval(timerId);
});

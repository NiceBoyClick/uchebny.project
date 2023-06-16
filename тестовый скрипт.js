'use Strict';

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

function startTimer() {
  timerId = setInterval(function() {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
  start.removeEventListener('click', startTimer);
}

start.addEventListener('click', startTimer);

stop.addEventListener('click', function() {
  clearInterval(timerId);
  start.addEventListener('click', startTimer);
});

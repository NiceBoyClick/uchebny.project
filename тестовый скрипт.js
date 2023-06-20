'use Strict';

let p = document.querySelector('p');
let button1 = document.querySelector('#start');
let button2 = document.querySelector('#stop');
let timerId;

button1.addEventListener('click', function() {
  timerId = setInterval(function() {
    p.textContent++;
  }, 1000);
});

button2.addEventListener('click', function() {
  clearInterval(timerId);
});
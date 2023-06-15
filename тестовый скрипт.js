'use Strict';

let start = document.querySelector('#start');

start.addEventListener('click', function func() {
  let i = 100;

  setInterval(function () {
    console.log(i--);
  }, 1000);

  this.removeEventListener('click', func);
});

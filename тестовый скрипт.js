'use Strict';

let p = document.querySelector('p');
let isRed = true;

setInterval(function() {
  if (isRed) {
    p.style.color = 'green';
    isRed = false;
  } else {
    p.style.color = 'red';
    isRed = true;
  }
  }, 1000);
'use Strict';

let input = document.querySelector('#elem');
let p = document.querySelector('p');

input.addEventListener('blur', function() {
  p.textContent = input.value
  setInterval(function() {
    if (p.textContent > 0) {
    p.textContent--;
  };
  }, 1000);
});

'use Strict';

let button = document.querySelector('button');
let par = document.querySelector('p');

button.addEventListener('click', function() {
  let self = this;
  setInterval(function() {
    par.textContent = Number(par.textContent) + 1;
  }, 1000);
});

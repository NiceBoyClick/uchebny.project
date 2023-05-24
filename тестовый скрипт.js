'use Strict';

let inputs = document.querySelectorAll('input');
let par = document.querySelector('p');
let but = document.querySelector('button');


but.addEventListener('click', function() {
  let sum = 0;
  for (let input of inputs) {
    console.log(input.value);
    sum += +input.value;
    par.textContent = sum;
  }
});

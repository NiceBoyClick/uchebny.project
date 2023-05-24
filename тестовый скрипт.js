'use Strict';

let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');
let sum = 0;

btn.addEventListener('click', function() {
  for (let elem of inputs) {
    sum += Number(elem.value);
  }
  console.log(sum);
});

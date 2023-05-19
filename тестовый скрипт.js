'use Strict';

let button = document.querySelector('button');
let elems = document.querySelectorAll('p');
let sum = 0;

button.addEventListener('click', function () {
  for (let elem of elems) {
    sum += +elem.textContent;
  };
    console.log(sum);
});



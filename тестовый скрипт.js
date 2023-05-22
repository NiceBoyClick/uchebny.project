'use Strict';

let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');

button.addEventListener('click', function() {
  let sum = 0;
for (let elem of elems) {
    sum += +elem.value;
  }
  console.log(sum);
});



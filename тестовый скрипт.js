'use Strict';

let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

button.addEventListener('click', function() {
  for (let input of inputs) {
    if (input.value == input.dataset.text) {
      input.classList.add('right');
    } else {
      input.classList.add('wrong');
    }
    console.log(input.classList);
  }
});


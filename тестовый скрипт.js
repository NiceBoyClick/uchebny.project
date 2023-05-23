'use Strict';

let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

let texts = [
  'text1',
  'text2',
  'text3',
];

button.addEventListener('click', function() {
  inputs.forEach(function(input, index) {
    if (input.value === texts[index]) {
      input.classList.add('right');
    } else {
      input.classList.add('wrong');
    }
    console.log(input.classList);
  });
});


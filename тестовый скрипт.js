'use Strict';

let button = document.querySelector('button');
let elem   = document.querySelector('p');

button.addEventListener('click', function() {
  elem.innerHTML = `<b>text</b>`;
});
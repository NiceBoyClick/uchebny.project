'use Strict';

let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function() {
  for (let elem of elems) {
    elem.innerHTML = `<b>${elem.innerHTML}</b>`;
  }
});


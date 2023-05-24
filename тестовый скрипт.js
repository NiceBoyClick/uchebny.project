'use Strict';

let inp = document.querySelector('#inp');
let par = document.querySelector('p');


inp.addEventListener('blur', function() {
  par.textContent += inp.value;z``
});

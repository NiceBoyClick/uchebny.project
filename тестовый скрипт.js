'use Strict';


let button = document.querySelector('.button');
let pars = document.querySelectorAll('.par');


button.addEventListener('click', func);


function func() {
  for (let elem of pars) {
    elem.textContent = 'text';
  }
};
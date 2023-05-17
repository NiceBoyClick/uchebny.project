'use Strict';


let button = document.querySelector('.button');
let pars = document.querySelectorAll('.par');


button.addEventListener('click', func);


function func() {
  for (let i = 0; i < pars.length; i++) {
    pars[i].textContent += i + 1;
  }
};
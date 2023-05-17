'use Strict';


let button = document.querySelector('.button');
let pars = document.querySelector('.par');
let inputs = document.querySelectorAll('.elem');



button.addEventListener('click', func);


function func() {
  let num = 0;
  for (let elem of inputs) {
    num += +elem.value;
    pars.textContent = num;
    console.log(pars.textContent);
  }
};
'use Strict';

let button = document.querySelector('.button');
let link = document.querySelector('.link');

button.addEventListener('click', func);

function func(){
  link.textContent += `(${link.href})`;
  this.removeEventListener('click', func);
};


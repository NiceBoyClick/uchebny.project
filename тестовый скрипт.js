'use Strict';


let par1 = document.querySelector('#par1');
let par2 = document.querySelector('#par2');
let par3 = document.querySelector('#par3');
let par4 = document.querySelector('#par4');
let par5 = document.querySelector('#par5');

par1.addEventListener('click', func);
par2.addEventListener('click', func);
par3.addEventListener('click', func);
par4.addEventListener('click', func);
par5.addEventListener('click', func);

function func() {
  this.textContent += '!';
}

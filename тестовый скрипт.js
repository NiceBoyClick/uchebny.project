'use Strict';


let input1 = document.querySelector('#elem1');
let input2 = document.querySelector('#elem2');
let input3 = document.querySelector('#elem3');


input1.addEventListener('blur', func);
input2.addEventListener('blur', func);
input3.addEventListener('blur', func);

function func() {
  this.value = this.value * this.value;
};
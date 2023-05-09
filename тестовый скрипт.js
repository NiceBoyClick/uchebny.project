'use Strict';

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

button.addEventListener('click', func1);


function func1() {
  console.log(Number(elem1.textContent) + Number(elem2.textContent));
}

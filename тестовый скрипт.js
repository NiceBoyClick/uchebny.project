'use Strict';

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let division = document.querySelector('#division');

button.addEventListener('click', func1);


function func1() {
 division.textContent = Number(elem1.textContent) + Number(elem2.textContent) + Number(elem3.textContent)
}

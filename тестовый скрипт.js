'use Strict';

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');

button.addEventListener('click', func1);


function func1() {
 elem1.textContent ++
}

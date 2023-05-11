'use Strict';

let button = document.querySelector('#button');
/*let image = document.querySelector('#image');*/
let input = document.querySelector('#elem');
let paragraph = document.querySelector('#paragraph');

button.addEventListener('click', func1);

function func1() {
 paragraph.textContent += input.value;
};


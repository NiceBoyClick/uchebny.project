'use Strict';

let button = document.querySelector('#button');
let image = document.querySelector('#image');
let input = document.querySelector('#elem');

button.addEventListener('click', func1);

function func1() {
 input.value = "введите текст";
};


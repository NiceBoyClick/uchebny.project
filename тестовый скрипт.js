'use Strict';

let button = document.querySelector('#button');
let input1 = document.querySelector('#elem1');
let input2 = document.querySelector('#elem2');

button.addEventListener('click', func1);

function func1() {
 input2.value = Math.sqrt(input1.value).toFixed(1);
};


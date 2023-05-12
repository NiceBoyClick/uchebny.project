'use Strict';

let button = document.querySelector('#button');
let input1 = document.querySelector('#elem1');
let input2 = document.querySelector('#elem2');

button.addEventListener('click', func1);

function func1() {
 let val1 = elem1.value;
 let val2 = elem2.value;
 elem1.value = val2;
 elem2.value = val1;
};


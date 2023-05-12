'use Strict';

let button = document.querySelector('#button');
let input1 = document.querySelector('#elem1');
let input2 = document.querySelector('#elem2');
let input3 = document.querySelector('#elem3');
let input4 = document.querySelector('#elem4');
let input5 = document.querySelector('#elem5');
let paragraph = document.querySelector('#paragraph');

button.addEventListener('click', func1);

function func1() {
 let result = (+elem1.value + +elem2.value + +elem3.value + +elem4.value + +elem5.value) / 5;
 console.log(result);
 paragraph.textContent = result;
};


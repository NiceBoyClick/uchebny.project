'use Strict';

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let link = document.querySelector('#link');

button.addEventListener('click', func);

function func() {
 elem.textContent += link.href;
};


'use Strict';

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);

function func() {
 elem.type = 'submit'
};


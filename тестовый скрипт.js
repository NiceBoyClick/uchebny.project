'use Strict';

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', func);

function func() {
 elem.innerHTML = '<b>bold</b>';
}

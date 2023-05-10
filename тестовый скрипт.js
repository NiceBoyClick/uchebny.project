'use Strict';

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', func);

function func() {
 console.log(elem.innerHTML);
}

'use Strict';

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');


button.addEventListener('click', func1);

function func1() {
  console.log(elem.textContent);
}



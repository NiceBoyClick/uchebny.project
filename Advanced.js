'use Strict';

let button = document.querySelector('#but');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    elem.style.width = parseInt(elem.style.width) + 50 + 'px';
    elem.style.height = parseInt(elem.style.height) + 50 + 'px';
    console.log(elem.style.width);
    console.log(elem.style.height);
});
'use Strict';

let button = document.querySelector('#but');
let text = document.querySelector('#div');

button.addEventListener('click', function() {
    console.log('font-size:',(parseFloat(text.style.fontSize)));
});
'use Strict';

let button = document.querySelector('#but');
let text = document.querySelector('#div');

button.addEventListener('click', function() {
    console.log('width:',(parseInt(text.style.width)));
    console.log('height:',(parseInt(text.style.height)));
});
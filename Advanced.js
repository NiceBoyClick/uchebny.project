'use Strict';

let button = document.querySelector('#but');
let text = document.querySelector('#div');

button.addEventListener('click', function() {
    text.style.width = '400px';
    text.style.height = '300px';
    console.log('width:',text.style.width);
    console.log('height:',text.style.height);
});
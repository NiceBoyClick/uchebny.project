'use Strict';

let button = document.querySelector('#button');
let Paragraph = document.querySelector('#Paragraph');
let image = document.querySelector('#image');

button.addEventListener('click', func);

function func() {
 image.width = image.width * 2;
 console.log(image.width);
};


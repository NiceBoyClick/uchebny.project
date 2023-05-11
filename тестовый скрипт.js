'use Strict';

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let image = document.querySelector('#image');

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);

function func1() {
 image.src = "orn.jpg";
};

function func2() {
 image.src = "brunner.jpg";
};


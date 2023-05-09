'use Strict';

let Paragraph1 = document.querySelector('#elem1');
let Paragraph2 = document.querySelector('#elem2');
let Paragraph3 = document.querySelector('#elem3');
let Paragraph4 = document.querySelector('#elem4');
let Paragraph5 = document.querySelector('#elem5');

Paragraph1.addEventListener('click', func);
Paragraph2.addEventListener('click', func);
Paragraph3.addEventListener('click', func);
Paragraph4.addEventListener('click', func);
Paragraph5.addEventListener('click', func);

function func() {
  console.log('message');
}

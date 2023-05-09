'use Strict';

let paragraph = document.querySelector('#elem');

paragraph.addEventListener('click', func1);
paragraph.addEventListener('click', func2);
paragraph.addEventListener('click', func3);

function func1() {
  console.log('1');
}

function func2() {
  console.log('2');
}

function func3() {
  console.log('3');
}
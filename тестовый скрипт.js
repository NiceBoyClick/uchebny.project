'use Strict';

let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
  inp3.value = +inp1.value + +inp2.value;
});



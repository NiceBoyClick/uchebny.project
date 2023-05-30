'use Strict';

let button = document.querySelector('button');
let par = document.querySelectorAll('p');

button.addEventListener('click', function () {
  par.forEach(function (elem, index, arr) {
    console.log(index);
    elem.textContent += index + 1;
  });
});

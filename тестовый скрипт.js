'use Strict';

let button = document.querySelector('button');
let link = document.querySelectorAll('a');

button.addEventListener('click', function () {
  for (let elem of link){
    console.log(elem.href);
    elem.innerHTML += `(${elem.href})`;
  }
});

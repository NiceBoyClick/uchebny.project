'use Strict';

let input = document.querySelector('.ФИО');
let inputs = document.querySelectorAll('.inp');


input.addEventListener('blur', function () {
  let names = input.value.split(' ');
  console.log('name:', names);
  inputs.forEach(function (input, index) {
    input.value = names[index] || '';
  });
});

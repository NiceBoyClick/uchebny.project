'use Strict';

let input = document.querySelector('.ФИО');

input.addEventListener('blur', function () {
  let names = input.value.split(' ');
  names.forEach(function (elem,index, array) {
   array[index] = elem.slice(0, 1).toUpperCase() + elem.slice(1);
  });
  input.value = names.join(' ');
});

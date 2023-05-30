'use Strict';

let input = document.querySelector('.text');

input.addEventListener('blur', function () {
  let num = input.value.split('');
  let res = num.some(function (elem) {
    return elem == 3;
  });
  console.log(res);
});

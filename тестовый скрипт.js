'use Strict';

let input = document.querySelector('.text');
let button = document.querySelector('.butt');

button.addEventListener('click', function () {
if (input.value == input.value.split('').reverse().join('')) {
  console.log('все заебись');
} else {
  console.log('не заебись');
}
});

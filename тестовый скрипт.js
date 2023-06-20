'use Strict';

let input = document.querySelector('#elem');


input.addEventListener('click', function() {
  setInterval(function() {
    input.value = Math.sqrt(input.value);
  }, 1000);
});

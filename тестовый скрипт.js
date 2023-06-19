'use Strict';

let elem = document.querySelector('#elem');
elem.value = 10;

setInterval(function() {
  elem.value = Number(elem.value) - 1;
}, 1000);

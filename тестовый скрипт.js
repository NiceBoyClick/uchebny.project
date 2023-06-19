'use Strict';

let elem = document.querySelector('#elem');
elem.value = 10;

setInterval(function() {
  if (elem.value > 0){
    elem.value = Number(elem.value) - 1;
  }
}, 1000);

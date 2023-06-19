'use Strict';

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
  let self = this;
  setInterval(function() {
    self.value = Number(elem.value) + 1;
  }, 1000);
});

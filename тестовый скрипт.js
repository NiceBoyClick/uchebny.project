'use Strict';

let inputs = document.querySelectorAll('.elem');

for (let elem of inputs) {
  elem.addEventListener('blur', func);
}

function func() {
  this.value = Number(this.value) + 1;
}
'use Strict';

let inputs = document.querySelectorAll('.elem');

for (let elem of inputs) {
  elem.addEventListener('click', func);
}

function func() {
  this.value = Number(this.value) * Number(this.value);
}
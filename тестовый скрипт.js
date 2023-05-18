'use Strict';

let elems = document.querySelectorAll('li');

for (let elem of elems) {
  console.log(elem);
  elem.addEventListener('click', function func() {
    elem.textContent++;
    if (elem.textContent >= 10) {
      this.removeEventListener('click', func);
    }
  });
}


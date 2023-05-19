'use Strict';

let elems = document.querySelectorAll('p');
for (const elem of elems) {
  elem.textContent += '!';
}

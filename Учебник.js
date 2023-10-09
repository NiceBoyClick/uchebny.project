'use strict';

let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

let set = new Set;

for (let elem of elems) {
    elem.addEventListener('click', function() {
        set.add(this);
    });
}

button.addEventListener('click', function() {
    for (let elem of set) {
        elem.textContent = elem.textContent + '!';
    }
});

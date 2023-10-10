'use strict';

let elems = document.querySelectorAll('p');

console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);

console.log(elems.length);

for (let elem of elems) {
    console.log(elem);
}
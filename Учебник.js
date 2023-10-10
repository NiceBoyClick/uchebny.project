'use strict';

let elems = document.querySelectorAll('p');


// первый способ
let arr = [];

for (let elem of elems) {
    arr.push(elem);
}

console.log(Array.isArray(arr));
console.log(arr);


// второй способ
let arr1 = [...elems];

console.log(Array.isArray(arr1));
console.log(arr1);


// третий способ
let arr2 = Array.from(elems);

console.log(Array.isArray(arr2));
console.log(arr2);




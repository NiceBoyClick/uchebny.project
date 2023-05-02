'use Strict';

let arr = [1, 2, 3, 4];
let result = arr.every((elem, index) =>
  (elem * index) < 30);
console.log(result);


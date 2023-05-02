'use Strict';

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = arr.some((elem, index) => (elem * index) > 30);
console.log(result);


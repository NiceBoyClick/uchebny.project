'use Strict';

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
  sum += elem * elem;
});

console.log(sum);


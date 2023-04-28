'use Strict';

let arr = [3, 5, 9, 2, 18];

let result = arr.map(function(elem, index) {
  return elem * index;
});

console.log(result);


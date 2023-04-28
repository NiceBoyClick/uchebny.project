'use Strict';

let arr = ['123', '456', '789'];

let result = arr.map(function(elem) {
  return elem.split('');
});

console.log(result);


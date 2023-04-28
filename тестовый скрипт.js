'use Strict';

let arr = ['14', '23', '36', '41', '59'];

let result = arr.map(function(elem) {
  return elem.split('').reverse().join('') ;
});

console.log(result);


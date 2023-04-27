'use Strict';

let array = [];

function func(arr) {
  for (let elem of arr) {
    if (typeof elem == 'object') {
      func(elem);
    } else {
      array.push(elem);
    }
  }
  return array;
}


func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(array);
'use Strict';

function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push( callback(elem) ); // вызываем функцию-коллбэк
  }

  return result;
}

let result = each([1, 2, 3, 4, 5], function(num) {
  return num * 2;
});

console.log(result);
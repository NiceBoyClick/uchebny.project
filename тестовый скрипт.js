'use Strict';

function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem)); // вызываем функцию-коллбэк
  }

  return result;
};

let result = each(['qwe', 'rty', 'uio', 'asd', 'fgh'], function (elem) {
  return elem.split('').reverse().join('');
});

console.log(result);
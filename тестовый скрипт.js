'use Strict';

function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem)); // вызываем функцию-коллбэк
  }

  return result;
};

let result = each(['qwe', 'rty', 'uio', 'asd', 'fgh'], function (elem) {
  return elem.slice(0, 1).toUpperCase() + elem.slice(1);
});

console.log(result);
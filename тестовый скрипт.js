'use Strict';

function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
};

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, (elem, index) =>
  elem * index > 10
);

console.log(result);
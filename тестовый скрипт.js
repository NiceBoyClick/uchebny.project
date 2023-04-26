'use Strict';

function every(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
};


let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10
);

console.log(result);
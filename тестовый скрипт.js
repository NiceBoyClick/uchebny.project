'use Strict';

function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}
let result = test(
  [1, 2, 3], function (num) {return num * num}
);
console.log(result);
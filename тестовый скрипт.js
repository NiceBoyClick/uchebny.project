'use Strict';

function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      arr[i] = func(arr[i]);
    } else {
      arr[i] = arr[i] * arr[i];
    }
  }

  return arr;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));


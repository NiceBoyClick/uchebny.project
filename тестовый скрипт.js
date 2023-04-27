'use Strict';

function func(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      sum += func(obj[key]);
    } else {
      sum += obj[key];
    }
  }

  return sum;
}

console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));
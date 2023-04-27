'use Strict';

function getSum(arr) {
  let sum = Math.pow(arr.shift(), 2);

  if (arr.length !== 0) {
    console.log(sum);
    sum += getSum(arr);
  }

  return sum;
}

console.log(getSum([1, 2, 3, 4, 5]));
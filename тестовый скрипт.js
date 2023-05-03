'use Strict';
function func(...nums) {
  let sum = 0;
  let mid = 0;
  for (let elem of nums) {
    sum += elem;
    console.log(sum)
  }
  mid = sum / 3;
  return mid.toFixed(1);
}
let result = func(1, 2, 3, 4, 5, 6, 7);
console.log(result);


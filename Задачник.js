'use Strict';

let arr = [1, -2, 3, -4, 5, -6];

function func() {
   let res = 0;
   for (let elem of arr) {
      if (elem < 0) {
         res++
      }
   }
   return res;
}
console.log(func(arr));






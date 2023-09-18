'use Strict';

let arr = [1, -2, 3, -4, 5, -6];
let good = arr.filter(function (elem){
   if (elem >= 0) {
      return true;
   } else {
      return false;
   }
});

console.log(good);






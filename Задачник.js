'use Strict';

let arr = [1, 2, 3, 1, 2, 3];

let overArr = arr.filter(function (elem){
   if (elem !== 2) {
      return true;
   } else {
      return false;
   }
})

console.log(overArr);



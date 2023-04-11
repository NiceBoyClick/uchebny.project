'use Strict';

let arr = [1, 2, 3, 4, 5, 6];

let obj = {

  getSum: function([]) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  },

  getSqrt: function([]) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem * elem;
    }
    return sum;
  },

  getCube: function([]) {
    let sum = 0;
    for (let elem of arr) {
      sum += Math.pow(elem, 3);
    }
    return sum;
  },
};

console.log(obj.getSum(arr));
console.log(obj.getSqrt(arr));
console.log(obj.getCube(arr));
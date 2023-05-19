'use Strict';

let elems = document.querySelectorAll('li');
let sum = 0;

for (let elem of elems) {
  let arr  = [...elem.textContent];
  let res = arr.reduce(function(sum, elem) {
    return sum + +elem;
  }, 0);
  if(res == 6){
    console.log(elem.textContent);
    sum += +elem.textContent;
  }
}
console.log(sum);


'use strict';

let set = new Set;
let sum = 0;

set.add(1);
set.add(2);
set.add(3);

for (let elem of set) {
   sum += elem;
}
console.log(sum);
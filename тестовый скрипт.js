'use Strict';

let arr = [
  function () {return 1},
  function () {return 2},
  function () {return 3},
]

for (let func of arr) {
  console.log(func());
}


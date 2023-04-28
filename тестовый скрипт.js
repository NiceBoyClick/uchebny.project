'use Strict';

let str;
let array = [];



function func(arr) {

  for (let elem of arr) {
    if (typeof elem == 'object') {
      func(elem);
    } else {
      array.push(elem);
      str = array.join('');
    }
  }
  return str;
}

func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]);
console.log(str);


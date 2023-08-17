'use Strict';

function func(str) {
   let arr = str.split('').reverse();
    for (let elem of arr) {
        console.log(elem);
    }
}

func('stroke');


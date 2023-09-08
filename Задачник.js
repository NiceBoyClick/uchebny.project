'use Strict';

let num = 12345;

function func() {
    let arr = String(num).split('').reverse();
    for (elem of arr) {
        console.log(+elem);
    }
}

func(num);

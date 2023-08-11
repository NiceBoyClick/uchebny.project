'use Strict';

function func(str) {
    let arr = str.split('');
    if (arr.length > 1) {
        return arr[arr.length - 2];
    };
    return 'строка из одного символа';
}

let result = func('hello');
console.log(result);

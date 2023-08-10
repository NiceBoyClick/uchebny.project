'use Strict';

function func(num1, num2) {
    let prime = num1.split('');
    let second = num2.split('');
    if (prime[0] === second[0]) {
        return console.log("совпадают");
    };
    return console.log('не совпадают');
}

let result = func('2', '5');

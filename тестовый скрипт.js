'use Strict';

function func(num1, num2) {
    if (num1 % num2 === 0) {
        return 'делится без остатка';
    };
    return 'делится с остатком';
}

console.log(func(40, 20));


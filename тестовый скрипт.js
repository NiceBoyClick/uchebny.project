"use strict"
function  areFriendlyNumbers(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i <= num1 / 2; i++) {
        if(num1 % i === 0) {
            sum1 += i;
        }
    }
    for (let i = 1; i <= num2 / 2; i++) {
        if(num2 % i === 0) {
            sum2 += i;
        }
    }
    if (num2 == sum1 && num1 == sum2) {

        return true;
    } else {
        return false;
    }
}

for (let i = 1; i <= 1000; i++) {
    for (let j = i + 1; j <= 1000; j++) {
        if (areFriendlyNumbers(i, j)) {
            console.log(`${i}, ${j}`);
        }
    }
}

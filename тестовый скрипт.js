"use strict"

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
            return true;
        }
        return false;
    }
}
console.log(isPrime(13)); // должен вывести true


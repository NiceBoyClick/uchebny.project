"use strict"
function findDivisors(num){
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(findDivisors(24));

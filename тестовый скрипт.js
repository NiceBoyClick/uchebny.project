"use strict"
function addNumber(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i)
    }
    return arr;
}
console.log(addNumber(8));
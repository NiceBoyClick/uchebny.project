"use strict"
let arr = [];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 10; i++) {
    arr.push(getRandomInt(1, 100))
}
console.log(arr);

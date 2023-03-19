"use strict"
function returnRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}
let arr = returnRandom([1, 'r', 4, 6, 7, 'y', 't']);
console.log(arr);
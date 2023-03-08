"use strict"
let arr = [1, 2, 3, 4, 5];
let sub = arr.splice(1, 0, 'a', 'b');
let sub1 = arr.splice(5, 0, 'c');
let sub2 = arr.splice(7, 0, 'e');
console.log(arr);
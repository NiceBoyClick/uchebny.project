"use strict"
let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
    console.log('+++');
} else {
    console.log('---');
}

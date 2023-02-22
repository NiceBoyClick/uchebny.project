"use strict"
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter++;
    }
}
console.log(counter);




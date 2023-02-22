"use strict"
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
let counter2 = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter3++;
    }
    if (elem == 2) {
      counter2++;
    }
}
console.log(`количество двоек: ${counter2}`);
console.log(`количество троек: ${counter3}`);




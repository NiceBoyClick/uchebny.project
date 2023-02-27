"use strict"
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keysum = 0;
let keyelem = 0;
let result = 0;
for (let elem in obj) {
    keysum += +elem;
    keyelem += obj[elem];
    result = keysum / keyelem;
}
console.log(result);


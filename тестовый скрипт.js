"use strict"
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i <= arr.length; i++) {
    let str = String(arr[i]);
    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
        console.log(str);
    }
}

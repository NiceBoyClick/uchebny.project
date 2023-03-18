"use strict"
let str = showSim('67354dfjh');
function showSim(str){
    let arr = str.split('').reverse().join('');
    return arr;
}

console.log(str);

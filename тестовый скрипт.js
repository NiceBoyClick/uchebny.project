"use strict"
let str = showSim('ldfjh345');
function showSim(str){
    let res = str.slice(0, 1).toUpperCase() + str.slice(1);
    return res;
}

console.log(str);

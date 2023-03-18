"use strict"
let str = showSim('bullet per second');
function showSim(str){
    let words = str.split(' ');
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }
    let result = words.join(' ');
    return result;
}
console.log(str);
"use strict"
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let key = [];
let elements = [];
for (let elem in obj) {
    key.push(elem);
    elements.push(obj[elem])
}
console.log(key);
console.log(elements)


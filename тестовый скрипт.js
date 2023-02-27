"use strict"
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let mass = [];
for (let elem in obj) {
    let i = obj[elem];
    i = String(obj[elem]);
    if (i[0] == 1 || i[0] == 2) {
        mass.push(+i);
    }
}
console.log(mass);


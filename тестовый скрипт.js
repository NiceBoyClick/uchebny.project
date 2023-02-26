"use strict"
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let elem in obj) {
    obj[elem] += obj[elem] * 0.1;
}
console.log(obj)

"use strict"
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
let sum = 0;
for (let employee of employees) {
    sum += employee.salary
}
console.log(sum);


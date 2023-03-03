"use strict"
let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let sum = 0;
for (let employee of employees) {
    if (employee.age >= 30) {
        sum += employee.salary;
    }
}
console.log(sum);


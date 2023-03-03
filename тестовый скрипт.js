"use strict"
let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data33',
    },
    {
        1: 'data31',
        2: 'data32',
        3: 'data33',
    },
];
for (let obj of data) {
    for (let name in obj) {
       console.log(obj[name]);
    }
}



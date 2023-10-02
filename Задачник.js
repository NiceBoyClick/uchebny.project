'use Strict';

let date = '2025-12-31';

function objDate() {
    let obj = {};
    let arrDate = date.split('-');
    obj.year = arrDate[0];
    obj.month = arrDate[1];
    obj.day = arrDate[2];
    return obj;
}

console.log(objDate(date));
'use Strict';

function newDay() {
  return (new Date).getDate();
}
function newMonth() {
  return (new Date).getMonth() + 1;
}

function newYear() {
  return (new Date).getFullYear();
}

let arr = [];
let [year = newYear(), month = newMonth(), day = newDay()] = arr;

console.log(day + '.' + month + '.' + year);



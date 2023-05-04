'use Strict';

let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position] = arr;

if (arr[3] !== undefined) {
  position = arr[3];
} else {
  position = 'trainee';
}
console.log(position);


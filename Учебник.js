'use Strict';

let  map = new Map;

let arr1 = ['string1'];
let arr2 = ['string2'];
let arr3 = ['string2'];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));

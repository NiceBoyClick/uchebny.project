'use Strict';

let map = new Map;

let arr1 = ['string1'];
let arr2 = ['string2'];
let arr3 = ['string3'];

let key1 = {};
let key2 = {};
let key3 = {};

map.set(key1, arr1);
map.set(key2, arr2);
map.set(key3, arr3);

console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

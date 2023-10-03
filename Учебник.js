'use Strict';

let map = new Map;

let arr1 = ['string1'];
let arr2 = ['string2'];
let arr3 = ['string3'];

let key1 = {'key': 1};
let key2 = {'key': 2};
let key3 = {'key': 3};

map.set(key1, arr1);
map.set(key2, arr2);
map.set(key3, arr3);

let values = map.values();


for (let elem of values) {
    console.log(elem);
}
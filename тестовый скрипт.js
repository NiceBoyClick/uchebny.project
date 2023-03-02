"use strict"
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
console.log(obj["key1"]["key1"]
    + obj["key1"]["key2"]
    + obj["key1"]["key3"]
    + obj["key2"]["key1"]
    + obj["key2"]["key2"]
    + obj["key2"]["key3"]
    + obj["key3"]["key1"]
    + obj["key3"]["key2"]
    + obj["key3"]["key3"]);
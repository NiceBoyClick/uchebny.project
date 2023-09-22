'use Strict';

let str = "01230506780";
let position = -1;
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
        count++;
        if (count === 3) {
            position = i;
            break;
        }
    }
}

console.log(position);









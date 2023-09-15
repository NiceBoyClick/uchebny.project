'use Strict';

for (let i = 1; i < 1000; i++) {
    let arr = String(i).split('');
    if (+arr[0] + +arr[1] == 5) {
        console.log(i)
    }
}



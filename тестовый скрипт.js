'use Strict';

function func() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
        continue;
    }
    console.log(sum);
}
func();


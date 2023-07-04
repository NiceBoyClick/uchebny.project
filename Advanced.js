'use Strict';

let input = prompt('введите число больше 100', '')
while (input <= 100) {
    if (input > 100) {
        break;
    } else if(input == null) {
        break;
    } else {
        input = prompt('введите число больше 100', '');
    }
}
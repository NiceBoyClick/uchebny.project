"use strict"
let num = 0;

if (num >= 10 && num <= 99) {
    let sum = (num % 10) + (num / 10 | 0);
    if (sum <= 9) {
        console.log("Сумма цифр однозначна");
    } else {
        console.log("Сумма цифр двухзначна");
    }
} else {
    console.log('недопустимое значение')
}

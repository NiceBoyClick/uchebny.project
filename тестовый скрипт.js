"use strict"
let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = 6;
for (let i = 0; i <= arr.length - 1; i++) {
    if (i == day) {
        document.write(`<br><i>${arr[i]}</i><br>`)
    } else {
        document.write(`<br>${arr[i]}<br>`)
    }
}
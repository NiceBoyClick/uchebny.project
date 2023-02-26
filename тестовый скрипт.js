"use strict"
let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
for (let i = 0; i <= arr.length - 1; i++) {
    if (i == arr.length - 1 || i == arr.length - 2) {
        document.write(`<br><b>${arr[i]}</b><br>`)
    } else {
        document.write(`<br>${arr[i]}<br>`)
    }
}
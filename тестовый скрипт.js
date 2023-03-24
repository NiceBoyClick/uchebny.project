"use strict"
function isLuckyTicket(ticketNumber) {
    // Преобразуем номер билета в строку и разбиваем на две половины
    const ticketString = String(ticketNumber);
    const firstHalf = ticketString.slice(0, 3);
    const secondHalf = ticketString.slice(3);

    // Считаем суммы цифр в каждой половине
    const firstHalfSum = sumDigits(firstHalf);
    const secondHalfSum = sumDigits(secondHalf);

    // Сравниваем суммы и возвращаем true, если они равны
    return firstHalfSum === secondHalfSum;
}

function sumDigits(str) {
    // Преобразуем строку в массив символов и считаем сумму цифр
    return str.split('').reduce((acc, digit) => acc + Number(digit), 0);
}

// Ищем все счастливые билеты
const luckyTickets = [];
for (let i = 0; i < 1000000; i++) {
    if (isLuckyTicket(i)) {
        luckyTickets.push(i);
    }
}

console.log(luckyTickets);
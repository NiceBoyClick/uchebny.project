'use Strict';


let login = prompt('введите логин', '' );

let message =
    (login === 'сотрудник') ?  alert('Привет') :
    (login === 'директор') ?  alert('Здравствуйте') :
        (login === '') ? alert('Нет логина') :  alert('');

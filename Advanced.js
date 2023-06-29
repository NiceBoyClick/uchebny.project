'use Strict';

let ask = prompt('кто там?', '');

if (ask === 'админ') {
    password = prompt('пароль?', '');
} else if (ask === null) {
    alert('отменено');
} else {
    alert('я вас не знаю')
} if (password === 'я главный') {
    alert('здравствуйте!');
} else if (password === null) {
    alert('отменено');
} else {
    alert('неверный пароль');
}
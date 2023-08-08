'use Strict';

function showLastLetter(word) {
    let arr = word.split('');
    if (arr[arr.length - 1] == 'ь') {
        return (arr[arr.length - 2])
    } else {
        return (arr[arr.length - 1]);
    }
}

console.log(showLastLetter("слово"));

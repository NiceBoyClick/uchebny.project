'use Strict';

let input = document.querySelector('.text');

input.addEventListener('blur', function () {
  let text = input.value.trim();
  let words = text.split(/\s+/);
  let wordsWithoutDigits = words.filter(word => !/\d/.test(word));
  let wordCount = wordsWithoutDigits.length;
  console.log('количество слов:', wordCount);
});

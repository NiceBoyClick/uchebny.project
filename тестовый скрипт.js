'use Strict';

let inp = document.querySelector('input');


inp.addEventListener('blur', function() {
  let sum = 0;
  let mid = 0;
  let digits = inp.value.split(',');
  console.log('digits:', digits);
  for (let digit of digits) {
    sum += +digit;
  }
  mid = sum / digits.length;
  console.log('sum:', sum);
  console.log('digits length:', digits.length);
  console.log('mid:', mid);
});

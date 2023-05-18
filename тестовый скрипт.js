'use Strict';

let button = document.querySelector('.button');
/*let link = document.querySelector('.link');*/

button.addEventListener('click', func);

function func(){
  button.textContent ++;
  if(button.textContent >= 10) {
    this.removeEventListener('click', func);
  }
};


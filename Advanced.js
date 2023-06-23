'use Strict';

let button = document.querySelector('#but');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    let widthPx = elem.style.width;
    let widthNm = parseInt(widthPx)
    let num = widthNm / 100 * 10
    elem.style.width = (widthNm + num) + 'px';

    let heightPx = elem.style.height;
    let heightNm = parseInt(heightPx)
    let num2 = heightNm / 100 * 10
    elem.style.height = (heightNm + num2) + 'px';
    console.log(elem.style.width);
    console.log(elem.style.height);
});
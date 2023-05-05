'use Strict';

function func({width, height, color = 'black'}) {
  console.log(width);
  console.log(height);
  console.log(color);
}

func( {color: 'red', width: 400, height: 500} );




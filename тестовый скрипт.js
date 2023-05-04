'use Strict';

let options = {
  width:  400,
  height: 500,
};

let {color, width, height} = options;

if (options.color !== undefined) {
  color = options.color;
} else {
  color = 'black';
}

console.log(color, width, height);



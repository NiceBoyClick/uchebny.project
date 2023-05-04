'use Strict';

let options = {
  width:  400,
  height: 500,
};

let {color: c, width: w, height: h} = options;

if (options.c !== undefined) {
  c = options.color;
} else {
  c = 'black';
}

console.log(c, w, h);



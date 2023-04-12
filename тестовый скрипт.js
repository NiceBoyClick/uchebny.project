'use Strict';

test(function(num) {
  return num * num * num;
});

function test(func) {
  console.log(func(3));
}
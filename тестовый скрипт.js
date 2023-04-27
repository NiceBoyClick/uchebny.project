'use Strict';

function func(arr) {
  console.log(arr.shift(), arr);

  if (arr.length != 0) {
    func(arr);
  }
}

func([1, 2, 3, 4, 5]);
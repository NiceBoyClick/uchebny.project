'use Strict';

let arr = {
  func1: function() {return 1},
  func2: function() {return 2},
  func3: function() {return 3},
};

for (let key in arr) {
  console.log(arr[key]());
}


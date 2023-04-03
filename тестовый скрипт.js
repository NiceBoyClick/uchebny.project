'use Strict';

function getCommonDivisors(a, b) {
  const divisors = [];

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

console.log(getCommonDivisors(44, 66));
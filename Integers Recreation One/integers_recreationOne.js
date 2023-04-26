/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. 
Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
The sum of these squares is 84100 which is 290 * 290.

Task:
Find all integers between m and n (m and n integers with 1 <= m <= n) 
such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) 
or a string. The subarrays (or tuples or Pairs) will have two elements: 
first the number the squared divisors of which is a square and then the sum 
of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/

function listSquared(m, n) {
  let result = [];

  for (let i = m; i <= n; i++) {
    let sumDiv = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        sumDiv += j ** 2;
      }
    }

    if (Number.isInteger(Math.sqrt(sumDiv))) {
      result.push([i, sumDiv]);
    }
  }

  return result;
}

function listSquared(m, n) {
  let result = [];

  for (let i = m; i <= n; i++) {
    let sumDiv = Array.from({ length: i }, (_, index) => index + 1)
      .filter((num) => i % num == 0)
      .map((num) => num ** 2)
      .reduce((a, b) => a + b);

    if (Number.isInteger(Math.sqrt(sumDiv))) {
      result.push([i, sumDiv]);
    }
  }

  return result;
}

function listSquared(m, n) {
  let result = [];

  const sumDiv = (x) => {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i == 0) {
        sum += i ** 2;
      }
    }
    return sum;
  };

  for (let i = m; i <= n; i++) {
    let sum = sumDiv(i);
    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }

  return result;
}

function listSquared(m, n) {
  let result = [];

  for (let i = m; i <= n; i++) {
    let sumDiv = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        sumDiv += j ** 2;
        let otherDivisor = i / j;
        if (otherDivisor !== j) {
          sumDiv += otherDivisor ** 2;
        }
      }
    }

    if (Number.isInteger(Math.sqrt(sumDiv))) {
      result.push([i, sumDiv]);
    }
  }

  return result;
}

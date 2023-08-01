/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  let res = 1;
  if (n == 0) return 1;
  if (x == -1) {
    if (n % 2 == 0) return 1;
    return -1;
  }
  if (n < 0) {
    n = -1 * n;
    x = 1.0 / x;
  }
  if (x == 0) return 0;

  while (n !== 0) {
    if (n % 2 == 1) {
      res *= x;
      n -= 1;
    }
    x *= x;
    n = Math.floor(n / 2);
  }

  return res;
};

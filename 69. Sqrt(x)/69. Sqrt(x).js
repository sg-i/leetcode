/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  if (x == 0 || x == 1) return x;
  const border = 0.001;
  const iterations = 100;
  let approximate = x / 2;
  for (let i = 0; i < iterations; i++) {
    let nextApproximate = (approximate + x / approximate) / 2;
    let difference = Math.abs(nextApproximate - approximate);
    if (difference < border) {
      return Math.floor(nextApproximate);
    } else {
      approximate = nextApproximate;
    }
  }
  return Math.floor(approximate);
};

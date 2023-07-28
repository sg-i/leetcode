/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const length = s.length;
  let wasL = false;
  let count = 0;
  for (let i = length - 1; i >= 0; i--) {
    const elem = s[i];
    if (elem != ' ') {
      wasL = true;
      count += 1;
    } else {
      if (wasL) {
        break;
      }
    }
  }
  return count;
};

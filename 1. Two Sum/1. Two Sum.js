/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let container = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    let x = target - cur;
    if (x in container) {
      return [container[x], i];
    } else {
      container[cur] = i;
    }
  }
  return [];
};

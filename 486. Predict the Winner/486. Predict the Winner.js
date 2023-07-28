/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  function canPlayer1WinRecursive(nums, start, end) {
    if (start === end) {
      return nums[start];
    }

    const chooseStart = nums[start] - canPlayer1WinRecursive(nums, start + 1, end);
    const chooseEnd = nums[end] - canPlayer1WinRecursive(nums, start, end - 1);

    return Math.max(chooseStart, chooseEnd);
  }
  return canPlayer1WinRecursive(nums, 0, nums.length - 1) >= 0;
};

function maxSubArray(nums) {
  if (!nums.length) return 0;

  let currentValue = nums[0];
  let maxValue = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentValue = Math.max(nums[i], currentValue + nums[i]);
    maxValue = Math.max(maxValue, currentValue);
  }

  return maxValue;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

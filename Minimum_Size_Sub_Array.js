/*
Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0


*/

/* soultion 1 
Create an sum variable and add the whole value to it but as soon as you will see it is sum >= target then you can subtract the value of array from starting.


*/

const minSubArrayLen1 = function (target, nums) {
  let start = 0,
    res = Infinity,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      res = Math.min(res, i - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  if (res === Infinity) {
    return 0;
  }

  return res;
};

minSubArrayLen1(7, [2, 3, 1, 2, 4, 3]);

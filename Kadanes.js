/**
 * Maximum Subarray
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Approach:- include the case where all the values are in negative.

 pick first and compare it with previous total if it is less than then update it with greater values.

 * 
 */

const maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];

  let maxSum = nums[0],
    currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(currentMax, maxSum);
  }
  return maxSum;
};

console.log("max sub array ", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

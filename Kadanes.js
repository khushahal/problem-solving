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


 * 
 */

const maxSubArray = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i;
  }
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

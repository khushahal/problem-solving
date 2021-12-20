/**
 * Kth Largest Element in a Stream.
 *
 *  Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

 We are solving this using array. it can be solved by using max heap.
 
 *
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums || [];
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  this.nums.sort((a, b) => b - a);
  return this.nums.length < this.k ? this.nums[0] : this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//let kth = new KthLargest(3, [4, 5, 8, 2]);

let kth = new KthLargest(1, []);

//console.log(" kth ", kth);
//[3],[5],[10],[9],[4]]

console.log("kth ", kth.add(-3));
console.log("kth ", kth.add(-2));
console.log("kth ", kth.add(-4));
console.log("kth ", kth.add(0));
console.log("kth ", kth.add(4));

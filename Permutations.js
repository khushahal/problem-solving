/**
 * find Permutations.Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 *
 *    Input: nums = [1,2,3]
      Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

        Input: nums = [0,1]
        Output: [[0,1],[1,0]]
        
        We can solve this by using recursion. 

        Credit and good Explanation link:https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff

 */

const permute = function (nums) {
  let result = [];

  // Base case of recursion. Each recursion should have base case from where it will give us result.
  if (nums.length === 0) {
    return [];
  } else if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    let numCopy = [...nums]; //create a new copy of array. i.e [1,2,3]

    let pickedNum = numCopy.splice(i, 1); //pick i character of variable. i.e [1]
    let combination = permute(numCopy); // send remaining array as new permute. [2,3]

    for (let j = 0; j < combination.length; j++) {
      result.push([...pickedNum, ...combination[j]]); //keep first character static and push remaining one from array.
    }
  }

  return result;
};

console.log("Possible permutaions of [1,2, 3] : ", permute([1, 2, 3]));

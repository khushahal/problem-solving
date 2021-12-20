/**
 * 
 *  Factorial Trailing Zeroes.
 *  Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

   Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

   Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

  Input: n = 0
Output: 0


 * 
solutions : it can not be done by simple string because long numeric value will give factorial values in infinity in javascript.
 
*  Accepted solution:- factorial of a number is a big number  
   A trailing zero is always produced by prime factors 2 and 5. If we can count the number of 5s and 2s, our task is done

   Consider the following examples.
n = 5: There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So a count of trailing 0s is 1.

 n = 11: There are two 5s and eight 2s in prime factors of 11! (2 8 * 34 * 52 * 7). So the count of trailing 0s is 2

  We can easily observe that the number of 2s in prime factors is always more than or equal to the number of 5s. So if we count 5s in prime factors, we are done

  
*/

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  console.log(" count ", count);

  return count;
};

trailingZeroes(384);

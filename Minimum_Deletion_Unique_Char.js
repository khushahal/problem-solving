/*
Minimum Deletions to Make Character Frequencies Unique
A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

Input: s = "aab"
Output: 0
Explanation: s is already good.


Input: s = "ceabaacb"
Output: 2
Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored)

*/

/*Approach 1: Count each character and delete duplicate character till it reaches to new unique*/
const minDeletions1 = function (s) {
  let characterCount = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    characterCount.set(char, (characterCount.get(char) || 0) + 1);
  }

  let uniqueCount = new Map();
  let duplicateCount = [];
  characterCount.forEach((value, key) => {
    if (uniqueCount.has(value)) {
      duplicateCount.push(value);
    }
    uniqueCount.set(value, true);
  });

  let totalDeletion = 0;
  duplicateCount.forEach((value) => {
    let data = value;
    if (uniqueCount.has(data)) {
      while (uniqueCount.has(data)) {
        data--;
        totalDeletion++;
      }
      data !== 0 && uniqueCount.set(data, true);
    }
  });

  return totalDeletion;
};

/*
Step 1:- prepare the frequency count of each character.
Step 2:- sort them in descending order.
Step 3:- a)if array value is greater then maximumAllow then so totalSubstraction will be decresed by maximumAllow.
       b)  decrease the maxAllow and frequency in each itration.

*/
const minDeletions2 = function (s) {
  const frequencyObj = {};
  let numOfSubtractions = 0;
  for (let letter of s) {
    frequencyObj[letter] =
      (frequencyObj[letter] ? frequencyObj[letter] : 0) + 1;
  }

  const frequencyArr = Object.values(frequencyObj).sort((a, b) => b - a);

  let maxAllowedFrequency = frequencyArr[0];
  for (let frequency of frequencyArr) {
    if (frequency > maxAllowedFrequency) {
      if (maxAllowedFrequency > 0) {
        numOfSubtractions += frequency - maxAllowedFrequency;
      } else {
        numOfSubtractions += frequency;
      }
    }
    maxAllowedFrequency = Math.min(maxAllowedFrequency - 1, frequency - 1);
  }
  return numOfSubtractions;
};

//minDeletions2("ceabaacb");
// minDeletions2("abcabc");
//minDeletions2("aaab");
//minDeletions2("aaabbbcc");

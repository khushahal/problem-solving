/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = ""
Output: 0

note: It's answer is knows as sliding window problems.

*/


/*
Answer approach 1 : the question will have all the characters in lower case so we can say maximum substring can be a-z 26.
by using set time complexity will be o(n*n) 

*/ 


var lengthOfLongestSubstring1 = function(s) {
    if(s.length == 0 ){
        return 0;
    } else if(s.length == 1){
        return 1;
    } else {
        let longestLength = 0;
        
        for(let i=0; i < s.length; i++) {
            let subString = new Set();
            for(let j=i; j<s.length; j++) {
                let char = s[j];
                if(subString.has(char)){
                    break;
                } else {
                    subString.add(char);
                }
            }
            
            if(subString.size > longestLength){
                longestLength = subString.size;
            }   
        }
        return longestLength;
    }  
};


/*
Answer approach 2 : We will store each character in a map and if it will repeat then we will remove that character and count the length.
by using set time complexity will be o(n) 

*/ 

const lengthOfLongestSubstring = function (s) {
    // Store counters for the the start of the window and the longest string's length
    let startOfWindow = 0,
        longestStringLength = 0;

    // Initialise a Map to store the characters of the current string
    var characterMap = new Map();

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Store the current character, and its position in the Map (saves repeatedly looking it up)
        let currentCharacter = s[i];
        let currentCharacterPositionInMap = characterMap.get(currentCharacter);

        // Check if current character exists in the Map, and was found within the current window
        if (currentCharacterPositionInMap >= startOfWindow) {
            // Move the current window to start after the first instance of the current character
            startOfWindow = currentCharacterPositionInMap + 1;
        }

        // Add the current character to the Map with its position in the string
        characterMap.set(currentCharacter, i);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            i - startOfWindow + 1
        );
    }

    return longestStringLength;
};


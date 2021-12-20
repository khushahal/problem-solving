/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.


*/

/*
Output : 
solution 1: using set.
*/


var hasCycle1 = function(head) {
    let uniqueList = new Set();
    let current = head;
    
    //store all the item to set and if it duplicate then return from there.
    while(current){
    if(uniqueList.has(current)){
       return true;
    }
    
    uniqueList.add(current)    ;
    current = current.next;    
          
    }
    
    
    return false;
};



/**
 * solution 1; Floyd’s Tortoise and Hare Algorithm , when 2 pointer will meet at a place. space complexity o(1)
 * / */  
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    //store all the item to set and if it duplicate then return from there.
    while(fast && fast.next){
     fast = fast.next.next;
     slow = slow.next;   
    
      // two pointers meet cycle
        if(fast == slow){
            return true;
        }
    }
    
    return false;
};
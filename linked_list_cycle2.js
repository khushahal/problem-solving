/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


*/


var detectCycle = function(head) {
    
    let unique = new Set();
    let current = head;
    let i = 0;
    
    while(current){
       
        if(unique.has(current)){
            return current;
        }
        
         unique.add(current);
        current = current.next;
        i++;
        
    }
    
    return null;
};
/*Given an array, find out the next smaller element for each element :-
input:-[4, 8, 5, 2, 25}
output:- [2,5,2, -1, -1]

Answer: Using stack we can get the result in o(n).

solution 1: sort the array in incresing order so all the elements will be NSE. o log n.
solution 2: using stack ( stack is LILO and we use push and pop of array's method to create an stack. */

function NSE(input){
let stack = [];
let mp = new Map();
stack.push(input[0]);
for(let i=1; i<input.length;i++){
 
 let arr = input[i];
 if(stack.length === 0){
	stack.push(arr);  
	continue;
 }
 
 // stack will latest previous value , if next value is samller than stack so remove that from stack and assign
 while(stack.length !=0 && stack[stack.length -1] > arr){
	mp[stack[stack.length -1]] = arr;
	stack.pop();
 }
 
 /* push next to stack so that we can find next smaller for it */
 stack.push(arr);  

}


//all remaning in stack will be -1;
 while (stack.length != 0)
        {
        mp[stack[stack.length -1]] = -1;
	stack.pop();
        }
		
		
input.forEach((val)=>{
console.log("key: ", val, "value:", mp[val] );
});		

}
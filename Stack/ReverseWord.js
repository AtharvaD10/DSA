console.log("Reverse word in string leetcode 151 using stack");

const reverseWords = function(str){
const strSplit = str.split(" ");
const stack = [];

for(let i of strSplit){
    stack.push(i);
}

let finalString = "";

while(stack.length){

    const current = stack.pop();
     
    if(current){
        finalString += " " + current;
     }
}
    return finalString.trim();
}

console.log(reverseWords("The sky is blue"));

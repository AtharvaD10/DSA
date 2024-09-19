function isValid(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (char === "(" || char === "[" || char === "{")
            {
             stack.push(char);
            }
            
        else if(char === ")" || char === "]" || char === "}")
        {

            if (isEmpty(stack)) {
                return false;
            }
            const top = stack.pop();

            if (
                char === ")" && top !== "(" ||
                char === "]" && top !== "[" ||
                char === "}" && top !== "{"
            ) {
                return false
            }
        }
    }
    return isEmpty(stack);
}

function isEmpty(stack) {
    return stack.length === 0;
}

const string = "{[(]}";

console.log(isValid(string));




// function lengthOfLongestSubstring(s) {
//     let n = s.length;
//     let set = new Set();
//     let left = 0;
//     let maxLength = 0;

//     for (let right = 0; right < n; right++) {
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//         }
//         set.add(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }

// Input: s = "a b c a b c b b"
//                           r 
//                         l

 console.log("Palindrome ");

 function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();
    
    // Helper function for recursion
    function checkPalindrome(s, start, end) {
        // Base case: if the start index is greater than or equal to the end index
        if (start >= end) {
            return true;
        }
        // Check characters at the start and end
        if (s[start] !== s[end]) {
            return false;
        }
        // Move towards the middle
        return checkPalindrome(s, start + 1, end - 1);
    }

    // Call the helper function
    return checkPalindrome(str, 0, str.length - 1);
}

// Example usage
const number = 12321;
console.log(`${number} is palindrome: ${isPalindrome(number)}`); // Output: true

var longestPalindrome = function(s) {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let len1 = expandAroundCenter(s, i, i);
        // Check for even-length palindromes
        let len2 = expandAroundCenter(s, i, i + 1);
        // Get the maximum length from both cases
        let len = Math.max(len1, len2);
        
        // Update the start and end pointers if a longer palindrome is found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
};

// Helper function to expand around the center
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1; // Length of the palindrome
}

// Example 
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"





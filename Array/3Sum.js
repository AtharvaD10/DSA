function threeSum(nums) {
    const result = [];
    const n = nums.length;

    console.log(n);

    // Early exit if there are fewer than 3 numbers
    if (n < 3) return result;

    // Sort the array
    let sort = nums.sort((a, b) => a - b); 
    console.log(sort);   //[ -4, -1, -1, 0, 1, 2 ]
                        //    i
                        //        l    
                        //                      r
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate values for the first element
        if ( nums[i] === nums[i - 1]) continue;

        let left = i + 1; // Start pointer
        let right = n - 1; // End pointer

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]); // Found a triplet

                // Skip duplicates for the second element
                while (nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third element
                while (nums[right] === nums[right - 1]) right--;

                left++; // Move the left pointer to the right
                right--; // Move the right pointer to the left
            } else if (sum < 0) {
                left++; // We need a larger sum
            } else {
                right--; // We need a smaller sum
            }
        }
    }

    return result;
}

// Example usage
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array
    const n = nums.length;

    if (n < 4) return result; // If there are less than 4 numbers, return empty result

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Skip duplicate values for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate values for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};

// Example usage:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // Output: [[-2, -1, 0, 1], [-2, 0, 0, 2]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // Output: [[2, 2, 2, 2]]

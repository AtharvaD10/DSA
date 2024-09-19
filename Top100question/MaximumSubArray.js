console.log("Maximum sum of sub array");

var maxSubArray = function(nums) {
    let sum = 0;
    let maxSum = nums[0];
     for(let i=0; i<nums.length; i++){
        sum += nums[i];

        if(sum > maxSum){
            maxSum = sum;
        }
        if(sum<0){
            sum =0;
        }
     }
     return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// [5,4,-1,7,8] = 23

// Time complexity - O(n);
// space complexity - O(1);
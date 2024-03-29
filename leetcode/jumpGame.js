var canJump = function(nums) {
    let validIndex = nums.length - 1;
    
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > 0 && i + nums[i] >= validIndex) validIndex = i;
    }
    
    return validIndex === 0;
};

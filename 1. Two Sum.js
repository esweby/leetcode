/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        if(target >= 0 && currNum > target) continue;
        else if (target < 0 && currNum < target) continue; 
        
        for(let k = i + 1; k < nums.length; k++) {
            if(nums[i] + nums[k] === target) return [ i, k ];
        }
    }
};

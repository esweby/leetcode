/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return [];
    nums.sort((a, b) => a - b);
   
    let result = nums[0] + nums[1] + nums.at(-1);
    let left, right;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length - 1;          
        while(left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if(Math.abs(total - target) < Math.abs(result - target)) {
                result = total;
            }

            if (total > target) {
                right--;
            } else if (total < target) {
                left++;
            } else {
                return total;
            }

        }
    }

    return result;
};

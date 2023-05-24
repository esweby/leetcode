/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let left = 0, right = height.length - 1;
    while(left < right) {
        let lh = height[left];
        let rh = height[right];
        area = Math.max(area, Math.min(lh, rh) * (right - left));
        lh < rh ? left++ : right--;
    }
    return area;
};

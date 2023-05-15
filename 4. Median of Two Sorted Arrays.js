/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sortedArr = [ ...nums1, ...nums2 ].sort((i, k) => i - k);

  const half = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2) {
    return sortedArr[half];
  } else if (sortedArr[half - 1] === sortedArr[half]) {
    return sortedArr[half];
  } else {
    return (sortedArr[half - 1] + sortedArr[half]) / 2.0;
  }
};

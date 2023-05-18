/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  if (s.length === 0) return 0;
  let str = "";
  let max = 1;
  for (let c = 0; c < s.length; c++) {
      if (s.length - c < max) break;
    str = s[c];
    for (let i = c + 1; i < s.length; i++) {
      const nextChar = s[i];
      if (str.indexOf(nextChar) >= 0) {
        break;
      }
      str += nextChar;

      if (str.length > max) {
        max = str.length;
      }
    }
  }
  return max;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;

  const length = s.length;
  const cycleLength = 2 * numRows - 2;
  let result = '';
  for(let row = 0; row < numRows; row++) {
      for(let l = 0; l + row < length; l += cycleLength) {
          result += s[l + row];
          if(row !== 0 && row !== numRows - 1 && l + cycleLength - row < length) {
              result += s[l + cycleLength - row];
          }
      }
  }  
  return result;
};

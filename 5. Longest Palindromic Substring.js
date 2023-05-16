/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0;
    for(let c = 0; c < s.length - 1; c++) {
        let len1 = expandFromCenter(c, c, s);
        let len2 = expandFromCenter(c, c + 1, s);

        let maxLength = Math.max(len1, len2);

        if(maxLength > end - start) {
            start = c - Math.floor((maxLength - 1) / 2);
            end = c + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
};

const expandFromCenter = (left, right, str) => {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

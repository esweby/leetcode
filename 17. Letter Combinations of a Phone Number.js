const letters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = digits.split('');
    if(!digits.length) return [];
    const results = [];

    function recurse(digit, str) {
        for(let letter of letters[digits[digit]]) {
            if(digits.length - digit > 1) {
                recurse(digit + 1, str + letter);
            } else {
                results.push(str + letter);
            }
        }
        return results;
    }

    return recurse(0, "");
};

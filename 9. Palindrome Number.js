/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false;

    let n = x;
    let rev = 0;

    while(n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10)
    }

    return x === rev;
};

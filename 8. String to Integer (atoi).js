// My original solution was a kind of messy for loop with a lot of if conditionals
// I've gone through the solutions and discovered this one as one that can be slightly
// improved upon

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const val = parseInt(s, 10);
    if (!isNaN(val)) {
        var limit = 2 ** 31;
        if(val >= limit - 1) {
            return limit -1;
        } else if(val < -limit) {
            return -limit;
        } else {
            return val;
        }
    } else {
        return 0;
    }
};

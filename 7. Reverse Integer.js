/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result;
    if(x < 0) {
        result = -(+(`${x}`.slice(1).split('').reverse().join('')));
    } else {
        result = +(`${x}`.split('').reverse().join(''))
    }
    const limit = 2 ** 31;
    return result > -limit && result < limit - 1  ? result : 0;
};

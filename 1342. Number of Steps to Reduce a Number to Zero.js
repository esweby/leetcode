/**
 * @param {number} num
 * @return {number}
*/
var numberOfSteps = function(num) {
    if(num < 1) return 0;

    let index = 1;
    while(num !== 1) {
        num = num % 2 === 1 ? num - 1 : num / 2;
        index++;
    }
    return index;
};

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
        return accounts
        .map(curr => curr
            .reduce((total, num) => total += num, 0))
        .sort((a, b) => a - b)[accounts.length - 1];
};

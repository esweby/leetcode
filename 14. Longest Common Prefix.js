/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    if(strs.length === 1) return strs[0];

    const firstStr = strs[0];
    let result = "";
    for(let i = 0; i < firstStr.length; i++) {
        const letter = firstStr[i];
        for(let k = 1; k < strs.length; k++) {
            if(strs[k][i] !== letter) {
                return result;
            }
        }
        result += letter;
    }
    return result;
};

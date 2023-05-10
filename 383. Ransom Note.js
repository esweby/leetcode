/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;

    let srcStr = magazine.split('');
    for(let i = 0; i < ransomNote.length; i++) {
        let posLetter = srcStr.indexOf(ransomNote[i]);
        if(posLetter < 0) {
            return false;
        }
        srcStr.splice(posLetter, 1);
    }
    return true;
};

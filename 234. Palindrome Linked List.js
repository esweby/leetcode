/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let val = [];

    while(head) {
        val.push(head.val);
        head = head.next;
    }
    
    let evenLength = val.length % 2 === 0 ? val.length / 2 : Math.floor(val.length / 2);
    for(let i = 0; i < evenLength; i++) {
        if(val[i] !== val[val.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

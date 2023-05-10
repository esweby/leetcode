/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let index = 1;
    let node = head.next;

    while(node) {
        index++;
        node = node.next;
    }

    if(index < 2) {
        return head;
    }

    node = head.next
    for(let i = 1; i < Math.floor(index / 2); i++) {
        node = node.next
    }

    return node;
};

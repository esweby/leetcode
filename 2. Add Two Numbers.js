/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let cur = result;

    while(l1 || l2) {
      if(l1) {
        carry +=  l1.val;
        l1 = l1.next;
      }

      if(l2) {
        carry += l2.val;
        l2 = l2.next;
      }

      cur.next = new ListNode(carry % 10);
      carry = Math.floor(carry / 10);
      cur = cur.next;
    }

    if (carry > 0) {
        cur.next = new ListNode(carry);
    }

    return result.next;
};

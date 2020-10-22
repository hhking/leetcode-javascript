/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 标记法，循环链表，做上标记，如果遇到已经做过标记的，说明遍历过，也就是有环。
// 时间O(n) 空间O(n)
var hasCycle = function(head) {
  while (head) {
    if (head.flag) return true;
    head.flag = true;
    head = head.next;
  }
  return false;
};

// 快慢指针
// 慢指针每次走一步，快指针每次走两步，如果有环，快慢指针会重合
var hasCycle2 = function(head) {
  if (!head || !head.next) return false;
  var slow = head, fast = head.next.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};

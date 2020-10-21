/**
 * 迭代法：
 * 遍历链表，每次把指针反转，指向前一个节点
 * 1、head 空处理
 * 2、遍历到最后，把 head 指向最后一个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;
  var p = head, prev = null, next = null;
  while (p) {
    next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  head = prev;
  return head;
};

/**
 * 尾递归
 */
var reverseList2 = function(head) {
  if (!head || !head.next) return head;

  var reverse = function(prev, curr) {
    if (!curr) return prev;
    var next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
  }

  head = reverse(null, head);
  return head;
}

 /**
  * 递归法
  */
 var reverseList3 = function(head) {
   if (!head || !head.next) return head;
   var next = head.next;
   var reverseHead = reverseList3(next);
   next.next = head;
   head.next = null;
   return reverseHead;
 }

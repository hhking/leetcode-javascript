const ListNode = require('../utils/linked');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 边界：删除倒数第 n 个节点，会没有 fast.next 
// 利用哨兵节点
// fast 先移动 n 步
var removeNthFromEnd = function(head, n) {
  if (!head) return;
  var preHead = new ListNode();
  preHead.next = head;
  var slow = preHead;
  var fast = preHead;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return preHead.next;
};

// fast 先移动 n-1 步
// 单独处理 fast.next 情况
var removeNthFromEnd2 = function(head, n) {
  if (!head) return;
  var slow = head;
  var fast = head;
  while (--n) {
    fast = fast.next;
  }
  if (!fast.next) return head.next;
  fast = fast.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};

// test case
var arr1 = [1, 2, 3, 4, 5];

function test(arr, n, expect) {
  const linked = ListNode.array2Linked(arr);
  const r = removeNthFromEnd(linked, n);
  console.log(ListNode.linked2Array(r), expect);
}

test(arr1, 5, [2, 3, 4, 5]);

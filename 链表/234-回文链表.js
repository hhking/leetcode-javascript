/**
 * 思路：
 * 回文要对比的是链表的前一半和后一半，也就是以链表中间为分界，分别向头尾两端比较
 * 1、找到中间位置：使用快慢指针，快指针每次走两步，慢指针每次都一步。这样快指针到链表结尾的时候，慢指针就在链表的中间位置。
 * 2、从中间位置向两边对比：后半段，从慢指针继续往后遍历就行了。问题在于前半段
 * 3、生成以前半段：反转前半段链表就行了，以中间节点为头节点
 * 4、奇数和偶数节点的处理：
 *    偶数情况 [1, 2, 2, 1] fast 遍历完，slow 指向第二个 2，这时，反转的链表从第一个 2 开始就行
 *    奇数情况 [1, 2, 3, 2, 1] fast 遍历完，slow 指向 3，反转的链表指向第一个 2，这时候要把 slow 往前移一位指向第二个 2 即可
 * 5、遍历对比两个链表是相等
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }
  // 快慢指针
  var slow = head;
  var fast = head;
  // 用来反转链表的临时变量
  var prev = null;
  var next = null;

  while (fast && fast.next) {
    // 快指针每次走两步
    // 慢指针每次走一步，同时反转链表
    fast = fast.next.next;
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // [1, 2, 3, 2, 1] 奇数情况，让 slow 从 3 移动到第二个 2，此时 prev 指向第一个 2
  // 此时得到反转的链接 prev 开始: 2 -> 1; slow 开始的链表：2 —> 1;
  if (fast) {
    slow = slow.next;
  }

  // 遍历链表，对比 val
  while (slow) {
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
}

// test case
const ListNode = require('../utils/linked');

var arr1 = [1, 2];
var arr2 = [1, 2, 1];
var arr3 = [1, 2, 2, 1];
var arr4 = [1, 2, 3, 2, 1];
var arr5 = [1, 2, 3, 2, 1, 0];

function test(arr, expect) {
  const linked = ListNode.array2Linked(arr);
  const r = isPalindrome(linked);
  console.log(r, expect);
}

test(arr1, false);
test(arr2, true);
test(arr3, true);
test(arr4, true);
test(arr5, false);

// 生成链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 数组转成链表结构
function array2Linked(arr) {
  let head = new ListNode(arr[0]);
  let i = 1;
  let curr = head;
  while (i < arr.length) {
    let val = arr[i];
    curr.next = new ListNode(val);
    curr = curr.next;
    i++;
  }

  return head;
}

module.exports = ListNode;
module.exports.array2Linked = array2Linked;

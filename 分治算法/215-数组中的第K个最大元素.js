/**
 * 215 数组中的第K个最大元素
 * 
 * 无序数组中，查找第 K 个最大元素
 * 思路：快速排序类似的思路，分区和分治
 * 
 * 因为是第 K 个最大，所以按从大到小进行分区
 * 选择一个分区的点，将数组分成 [0, p-1] [p] [p+1, n-1]
 * 如果 K = p + 1（数组是从0开始的），那第 K 大元素就是 [p] 了
 * K < p + 1，那就从 [0, p-1] 中找，递归分区
 * K > p + 1，那就从 [p+1, n-1] 中找，递归分区
 * 
 * 时间复杂度：O(n)
 */

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function partition(arr, left, right) {
  var pivotIndex = randBetween(left, right);
  swap(arr, pivotIndex, right);
  var pivot = arr[right];
  var p = left;
  for(var i = left; i < right; i ++) {
    if (arr[i] > pivot) {
      swap(arr, i, p);
      p++;
    }
  }
  swap(arr, p, right);
  return p;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var len = nums.length;
  if (len < k) return;
  var p = partition(nums, 0, len-1);
  // left 和 right 作为分区的开始和结束边界，动态更新
  var left = 0;
  var right = len - 1;
  while (k !== p + 1) {
    if (k < p + 1) {
      right = p - 1;
      p = partition(nums, left, p - 1);
    } else {
      left = p + 1;
      p = partition(nums, p + 1, right);
    }
  }
  return nums[p];
};

/**
 * 无序数组中，查找第 K 大元素
 * 思路：快速排序类似的思路，分区和分治
 * 
 * 选择一个分区的点，将数组分成 [0, p-1] [p] [p+1, n-1]
 * 如果 K = p + 1（数组是从0开始的），那第 K 大元素就是 [p] 了
 * K < p + 1，那就从 [0, p-1] 中找，递归分区
 * K > p + 1，那就从 [p+1, n-1] 中找，递归分区
 * 
 * 时间复杂度：O(n)
 */

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}

function partition(arr, left, right) {
  var pivot = arr[right];
  var p = left;
  for(var i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, p);
      p++;
    }
  }
  swap(arr, p, right);
  return p;
}

function kthNum(arr, k) {
  var len = arr.length;
  if (len < k) return null;
  var p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

var testArr = [4, 2, 5, 12, 3];
console.log(kthNum(testArr, 5));

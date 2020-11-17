/**
 * 归并排序
 */

function merge(leftArr, rightArr) {
  var temp = [];
  var i = 0;
  var j = 0;
  // 两个数组从头开始对比
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      temp.push(leftArr[i]);
      i++;
    } else {
      temp.push(rightArr[j]);
      j++;
    }
  }
  // leftArr 或者 rightArr 还剩下的数组，直接合并
  return temp.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

function mergeSort(arr) {
  var len = arr.length;
  // 递归终止条件：数组分解成只剩一个时返回
  if (len <= 1) return arr;
  // 找到中间位置
  var middle = len >> 1;
  // 拆分两个数组
  var leftArr = arr.slice(0, middle);
  var rightArr = arr.slice(middle);
  // 递归拆解 -> 合并
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

var testArr = [];

for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random() * 1000));
}

let result = mergeSort(testArr);
console.log(testArr);
console.log(result);

/**
 * 快排
 */

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function partition(arr, l, r) {
  var pivotIndex = randBetween(l, r);
  swap(arr, pivotIndex, r);
  var pivot = arr[r];
  var cur = l;
  for(var i = l; i < r; i++) {
    if (arr[i] < pivot) {
      swap(arr, cur, i);
      cur++;
    }
  }
  swap(arr, cur, r);
  return cur;
}

function quickSort(arr, l, r) {
  if (l >= r) return;
  var p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
}

var testArr = [];

for (let i = 0; i < 1000000; i++) {
  testArr.push(Math.floor(Math.random() * 1000));
}

console.log(testArr);
quickSort(testArr, 0, testArr.length - 1);
console.log(testArr);

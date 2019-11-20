'use strict';
function mergeSort(arr) {
  let n = arr.length

  if(n < 2){
    return arr;
  }
  let mid = Math.floor(n/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let otherArr = [];
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      otherArr.push(left[i++]);
    } else{
      otherArr.push(right[j++]);
    }
  }

  return otherArr.concat(left.slice(i)).concat(right.slice(j));
}


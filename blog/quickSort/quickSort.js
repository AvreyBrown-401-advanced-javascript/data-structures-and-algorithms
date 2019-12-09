'use strict';


// made using help from Seth Koch https://www.youtube.com/channel/UCZaEwxwtjlOvc33Gc82y3iA

function quickSort(arr) {
  // base case
  if(arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i ++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }

  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([8,4,23,42,16,15]))

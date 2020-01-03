# Quicksort

## Intro
- Quicksort is yet another 'divide and conquer' algorithm, this version creates two containment arrays, and sets a value as the 'pivot'. 

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

## How It Works

- this particular function sets the pivot to always be the very last value in the array, and pushes all of the values greater than it into an array called right, and all of the values less than it into another array called left.
- Run #1- [8,4,23,42,16,15] 15 is the pivot
  - arr 1(left) [4,8]
  - arr 2(right) [23,42,16] 
- Run #2- 
  - arr 1(left) [4,8] 8 is the new pivot
  - Run #3
    - [4] no more pivots
    - [8] no more pivots
  - arr 2(right) [8,23,42,16] 
  - Run #3
    - left[8] no more pivots beacuse array length = 1
    - right[23,42] 42 is the pivot
  - Run # 4
    - left[23]
    - right[42]
- The function now "stitches" them all back together, returning the function recursivley with the pivots in their correct positioning

### Final Result
  - The Sorted array: [4,8,15,16,23,42]



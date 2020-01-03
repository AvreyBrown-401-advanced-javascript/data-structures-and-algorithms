# MergeSort

- The function mergeSort is calling itself recursivley with another merge helper function. It follows a 'divide and conquer' concept to sort the array of elements, it will divide the larger array into smaller pieces and sort those individual pieces before putting them back together
- The function first divides the array into two smaller arrays
    - [8,4,23,42,16,15] -> [8,4,23] and [42,16,15]
- Then into smaller pieces, sorting them recursivley as it goes
    - [4,8], [23], [16,42] and [15]
-Then Smaller
    - [4], [8], [23], [16], [42], [15]
- Then it merges them into bigger pieces
    - [4,8,23] and [15,16,42]
- And then
    - [4,8,15,16,23,42]

- This function is O(n), as it takes in an array, so it must go over every element in the array, despite its size

'use strict';

let array = [4,8,15,16,23,42];

function binarySearch(sortedArray, input) {
  let counter;
  for(let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] === input){
      counter = i;
    }
  }
  if(counter > 0){
    return counter;
  } else {
    return -1;
  }
}

console.log(binarySearch(array, 69));

module.exports = binarySearch;

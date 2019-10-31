'use strict';

let counter;
let array = [4,8,15,16,23,42];

function binarySearch(sortedArray, input) {
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

binarySearch(array, 15);

describe('binarySearch', () => {
  it('it should return the index value of the given number in the array', () => {
    expect(binarySearch(array, 15)).toEqual(2);
  });
  it('it should return the index value of the given number in the array', () => {
    expect(binarySearch(array, 69)).toEqual(-1);
  })})

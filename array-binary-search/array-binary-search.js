'use strict';

let counter;
let array = [4,8,15,16,23,42];

function BinarySearch(sortedArray, input) {
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

BinarySearch(array, 15);

describe('BinarySearch', () => {
    it('it should return the index value of the given number in the array', () => {
      expect(BinarySearch(array, 15)).toEqual(2);
    });
    it('it should return the index value of the given number in the array', () => {
        expect(BinarySearch(array, 69)).toEqual(-1);
  })
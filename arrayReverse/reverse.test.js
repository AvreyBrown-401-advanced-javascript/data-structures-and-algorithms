'use strict';

let arr = [1,2,3];
const newArr = [];

function reverseArray(arr) {

  for(let i = -arr.length; i < arr.length; i++) {
    newArr.push(arr.pop(i));
  }

  return newArr;
}

describe('testing reverse-array method', () => {

  it('can reverse a given array', () => {
    expect(reverseArray(arr)).toEqual([3, 2, 1])
  })
})





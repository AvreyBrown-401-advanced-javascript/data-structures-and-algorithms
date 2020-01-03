'use strict';

const binarySearch = require('./array-binary-search');


describe('binarySearch', () => {
  it('it should return the index value of the given number in the array', () => {
    let array = [4,8,15,16,23,42];
    expect(binarySearch(array, 15)).toEqual(2);
  });
  it('it should return -1 beacuse the given value isnt in the array', () => {
    let array = [4,8,15,16,23,42];
    expect(binarySearch(array, 69)).toEqual(-1);
  })});


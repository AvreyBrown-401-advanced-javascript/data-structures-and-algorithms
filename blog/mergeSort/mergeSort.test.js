'use strict';

const mergeSort = require('./mergeSort');

describe('the test will output the sorted array', () => {
  it('will sort the array', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42])
  })
  it('will return the array if its length is not sortable', () => {
    expect(mergeSort([8])).toEqual([8])
  })
})


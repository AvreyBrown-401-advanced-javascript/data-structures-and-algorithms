'use strict';

const quickSort = require('./quickSort');

describe('the test will output the sorted array', () => {
  it('will sort the array', () => {
    expect(quickSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42])
  })
  it('will return the array if its length is not sortable', () => {
    expect(quickSort([8])).toEqual([8]);
  })
})



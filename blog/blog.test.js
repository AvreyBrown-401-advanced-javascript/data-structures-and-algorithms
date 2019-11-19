'use strict';


describe('the test will output the sorted array', () => {
  it('will return true when compared to the sorted array', () => {
    expect(insertionSort([8,4,23,42,16,15])).toBeEqualTo([4,8,15,16,23,42])
  })
})

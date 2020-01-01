'use strict';

const LinkedList = require('./linkedList');
let newLL = new LinkedList();

describe('testing LL methods', () => {

  it('can add a node to the end of the list', () => {
    newLL.append(1);
    expect(newLL.size).toEqual(1)
  })

  it('Can successfully insert a node before another in the LL', () => {
    newLL.append(2);
    newLL.insertBefore(2, 1);
    expect(newLL.head.value).toEqual(1);
  });
  it('Can successfully insert a node after another in the LL', () => {
    newLL.insertAfter(2, 3);
    expect(newLL.head.next.next.value).toEqual(3);
  });

});

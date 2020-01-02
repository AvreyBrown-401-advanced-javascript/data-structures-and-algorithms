'use strict';

const LinkedList = require('./linked-list');
const list = new LinkedList();

describe('testing LL methods', () => {

  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBe(null);
  })

  it('Can properly insert into the linked list', () => {
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toEqual(2);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert(3);
    list.insert(4);
    expect(list.size).toEqual(4);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    list.insert(5);
    expect(list.includes(5)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(list.includes(10)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(list.toString()).toEqual('  5  4  3  2  1');
  });

});


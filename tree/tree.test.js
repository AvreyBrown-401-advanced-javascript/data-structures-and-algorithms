'use strict';

const {BinarySearch, BinaryTree, Node} = require('./tree');

describe('tree traversal', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearch(null);
    expect(tree.root).toEqual({'left': null, 'right': null, 'value': null});
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearch(7);
    expect(tree.root.value).toBe(7);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const newTree = new BinarySearch(69);
    newTree.add(12);
    newTree.add(420);
    expect(newTree.root.value).toBe(69);
    expect(newTree.root.left.value).toBe(12);
    expect(newTree.root.right.value).toBe(420);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const tree = new BinarySearch(1);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    expect(tree.preOrder()).toEqual([1,2,3,4,5,6]);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    const tree = new BinarySearch(6);
    tree.add(6);
    tree.add(5);
    tree.add(4);
    tree.add(3);
    tree.add(2);
    tree.add(1);
    expect(tree.inOrder()).toEqual([1,2,3,4,5,6]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const tree = new BinarySearch(1);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    expect(tree.postOrder()).toEqual([6,5,4,3,2,1]);
  });
})



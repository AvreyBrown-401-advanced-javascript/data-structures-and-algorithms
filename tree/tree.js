'use strict';

// const Queue = require('../psuedoQueue/psuedoQueue');

// Node class
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  preOrder(){
    let arr = [];

    const traverse = node => {

      arr.push(node.value)

      if(node.left) {
        traverse(node.left)
      }

      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root)
    return arr;
  }

  inOrder() {

    let arr = [];

    const traverse = node => {

      if(node.left) {
        traverse(node.left)
      }

      arr.push(node.value)

      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root)
    return arr;
  }

  postOrder() {
    let arr = [];

    const traverse = node => {

      if(node.left) {
        traverse(node.left)
      }

      if(node.right) {
        traverse(node.right)
      }
      arr.push(node.value)
    }
    traverse(this.root)
    return arr;
  }
}

class BinarySearch extends BinaryTree {
  // constructor(value) {
  //   this.root = new Node(value);
  //   this.count = 0;
  // }

  add(value){
    this.count ++;

    let newNode = new Node(value);

    const searchTree = node => {
      if(value < node.value) {
        if(!node.left) {

          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }

      else if ( value > node.value ) {
        if(!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  contains(value) {
    let currentNode = this.root;

    while(currentNode) {
      if(value === currentNode.value) {
        return true;
      }
      if(value < currentNode.value) {
        currentNode = currentNode.left
      }
      else{
        currentNode = currentNode.right
      }
    }
    return false;
  }

  findMax() {

    let max = this.root.value;


    let traverse = (node) => {

      if(node.left) {
        traverse(node.left)
      }

      if(node.right) {
        traverse(node.right)

      }
      if(node.value > max) {
        max = node.value;
      }
    }

    traverse(this.root);
    return max;
  }
}

module.exports = {BinarySearch, BinaryTree, Node};

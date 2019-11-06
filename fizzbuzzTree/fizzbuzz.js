'use strict';
class Node{
  constructor(value, left = null, right = null){
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  fizzBuzzTree(tree){
    
    while(value) {
      if(value % 3 === 0) {
        value = 'fizz';
        return value;
      };

      if(value % 5 === 0) {
        value = 'buzz';
        return value;
      };

      if(value % 3 === 0 && value % 5 === 0 ) {
        value = 'fizzbuzz';
        return value;
      };
    }
    return tree;
  };
}





let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

let tree = new FizzBuzzTree(one);

console.log(tree.;


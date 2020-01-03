'use strict';
class BinaryTree {
  constructor(root){
    this.root = root;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }

}

function fizzBuzzTree(tree) {

  if(tree.root === null) {
    return 'tree is empty brutha!';
  }

  traversal(tree.root)

  return tree
}

// recursive function
function traversal(node) {

  if(node === null) {
    return;
  }

  if(node.value & 3 === 0 && node.value % 5 === 0) {
    node.value = 'fizzbuzz';
  }

  if(node.value & 3 === 0) {
    node.value = 'fizz';
  }

  if(node.value % 5 === 0) {
    node.value = 'buzz';
  }

  traversal(node.left);
  traversal(node.right);
}




let tree = new BinaryTree(one);

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

console.log(fizzBuzzTree(tree));




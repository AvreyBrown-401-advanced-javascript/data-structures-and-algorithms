'use strict';
class BinaryTree {
  constructor(root){
    this.root = root;
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

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
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

let tree = new BinaryTree(one);




console.log(tree.findMax());

'use strict';


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
}

// let tree1= new BinarySearch(1);
// let tree2 = new BinarySearch(1);

// function intersect(tree1, tree2) {

//   tree1.preOrder();
//   tree2.preOrder();

//   while()

// }



// let tree = new BinaryTree(15);

// tree.add(1)
// tree.add(2)
// tree.add(3)
// tree.add(4)
// tree.add(5)

// console.log(tree);


module.exports = {BinarySearch, BinaryTree, Node};

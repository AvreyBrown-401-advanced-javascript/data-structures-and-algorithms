'use strict';


// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  // add(value) {
  //   if(node.value === value) {
  //     return value;
  //   }
  //   if(node.value > value) {
  //     this.add(node.left )
  //   }
  // }


  preOrder(root){

    console.log(root.value);

    if(root.left) {
      this.preOrder(root.left)
    }

    if(root.right) {
      this.preOrder(root.right)
    }


  }

  inOrder(root) {

    let arr = [];

    if(root.left) {
      arr.push(this.inOrder(root.left));
    }
    
    // console.log(root.value);
    
    if(root.right) {
      arr.push(this.inOrder(root.right));
    }
    
    return arr;

  }

  postOrder(root) {

    if(root.left) {
      this.inOrder(root.left)
    }

    if(root.right) {
      this.inOrder(root.right)
    }

    console.log(root.value);
  }

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
}

class BinarySearch {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

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
    
  }
}


let tree = new BinaryTree(15);

tree.add(1)
tree.add(2)
tree.add(3)
tree.add(4)
tree.add(5)

console.log(tree);



// console.log(tree.preOrder(tree.root))
// console.log(tree.inOrder(tree))
// console.log(tree.preOrder(tree.root))

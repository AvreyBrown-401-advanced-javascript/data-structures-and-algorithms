
'use strict';
'use strict';

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var node = {
    data : val,
    left : null,
    right : null
  };

  var currentNode;
  
  if (!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
        break;
      }
    }    
  }
};

var BST = new BinarySearchTree();

BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);

console.log(BST);


class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  preOrderTraversal(root) {

    console.log(root.data);
    if (root.left) {
      this.preOrderTraversal(root.left);
    }
    if (root.right) {
      this.preOrderTraversal(root.right);
    }
  }

  postOrderTraversal(root) {

    if (root.left) {
      this.postOrderTraversal(root.left);
    }
    if (root.right) {
      this.postOrderTraversal(root.right);
    }
    console.log(root.data);

  }

  inOrderTraversal(root) {

    if (root.left) {
      this.inOrderTraversal(root.left);
    }
    console.log(root.data);
    if (root.right) {
      this.inOrderTraversal(root.right);
    }
  }
}



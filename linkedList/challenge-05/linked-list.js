'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    const node = new Node();
    let oldHead = this.head;
    this.head = new Node(value);
    oldHead = this.head.next;



  }

  includes() {

  }


}




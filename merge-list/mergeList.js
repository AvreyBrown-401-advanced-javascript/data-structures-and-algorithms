'use strict';



class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  mergeList(list1, list2) {
    let node = new Node(list1);
    let node2 = new Node(list2)

    let current1 = this.head;
    let current2 = this.head;

    current1.next = current2.head;

    while(current1.next !== null && current2.next !== null) {
      current1.next = current2.next;
      current1.next = current2.next;
    }

    return current1;

  }
}
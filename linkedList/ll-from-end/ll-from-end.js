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





  kthFromEnd(position) {

    // let node = new Node();

    let current = this.head;
    let length = 0;

    //traversing our list and getting our length
    while(current.next) {
      length++;
      current = current.next;
    }

    if(position >= length) {
      return 'Exception found, position isnt in list';
    }

    current = this.head;

    for(let i = 1; i < length - position; i++) {
      current = current.next;
    }

    return current.value;
  }
}

const ll = new LinkedList();
ll.head = new Node(1);
ll.head.next = new Node(3);
ll.head.next.next = new Node(7);


console.log(ll.kthFromEnd(1));

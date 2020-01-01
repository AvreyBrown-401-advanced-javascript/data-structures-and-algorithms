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
    this.size = 0;
  }

  append(value) {

    let node = new Node(value);

    let current;

    if(!this.head){
      this.head = node;
      this.size++;
      return
    }
    else{
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    let current = this.head;
    let previous = null;

    current = current.next;

    while(current) {
      if(current.value === value) {
        if(previous === null) {
          this.head = node;
        }
        else {
          previous.next = node;
        }
        node.next = current;
        break;
      }
      previous = current;
      current = current.next;
    }
    this.size++;
  }

  insertAfter(value, newValue){
    const node = new Node(newValue);
    let current = this.head;

    if(current.value === value) {
      node.next = current.next;
      this.head = node;
      return;
    }

    current = current.next;

    while(current) {
      if(current.value === value) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
}

const ll = new LinkedList()
ll.append(1);
ll.append(2);
ll.append(4);
ll.insertBefore( 4, 3);
// ll.insertAfter( 1, 0);
console.log(ll);

module.exports = LinkedList;

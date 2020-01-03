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

    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this.head;
  }

  includes(value) {

    let current = this.head;

    while(current) {
      if(value === current.value) {
        return true;
      }
      if(value < current.value) {
        current = current.prev
      }
      else{
        current = current.next
      }
    }
    return false;
  }


  toString() {

    let current = this.head;
    let string = '';

    while(current){
      string = `${string}  ${current.value}`;
      current = current.next;
    }
    return string;
  }

  mergeList(list1, list2) {
    let node = new Node(list1);
    let node2 = new Node(list2)

    node;
    node2;
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

let ll = new LinkedList();

ll.insert(1);
ll.insert(2);
console.log(ll.toString())

module.exports = LinkedList;

// 'use strict';

// class Node{
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(value) {

//     let node = new Node(value);

//     let current;

//     if(this.head === null){
//       this.head = node;
//       this.size++;
//       return
//     }
//     else{
//       current = this.head;

//       while(current.next) {
//         current = current.next;
//       }

//       current.next = node;
//       this.size++;
//     }
//   }




//   insertBefore(value, newValue) {
//     const node = new Node(value);

//     let current = this.head.next;
//     let previous = this.head;

//     if(this.head === value) {
//       node.next = this.head;
//       this.head = node;
//       return;
//     }

//     // let previous = this.head;

//     current = current.next;


//     while(current.next !== null) {
//       if(current.value === value) {
//         previous.next = node;
//         node.next = current;
//         break;
//       }
//       previous = previous.next;
//       current = current.next;
//     }


//   }

//   insertAfter(value, newValue){

//   }
// }

// const ll = new LinkedList

// ll.append(1);
// ll.insertBefore( 1, 0);
// // ll.insertAfter( 1, 0);

'use strict';

class PseudoQueue {
  constructor() {
    this.storage = [];
    this.storage2 = [];
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    if(this.storage2.length === 0) {
      if(this.storage.length === 0) {
        return 'storage is empty';
      }
      while(this.storage.length > 0) {
        let intoStorage = this.storage.pop();
        this.storage2.push(intoStorage);
      }
    }

    return this.storage2.pop();
  }

}

let stuff = new PseudoQueue();

console.log(stuff.enqueue(1), stuff.enqueue(2), stuff.enqueue(3));

module.exports = PseudoQueue;

'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    return this.shelter.push(animal);
  }

  dequeue(pref) {

    if(pref !== 'dog' || pref !== 'cat') {
      return null;
    } else{
      return pref;
    }

  }
}

let stuff = new AnimalShelter();

console.log(stuff.enqueue(1), stuff.enqueue(2), stuff.enqueue(3));

module.exports = AnimalShelter;

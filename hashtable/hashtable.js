'use strict';

const hash = (key, size) => {
  let hashKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashKey = key.charCodeAt(i);
  }

  return hashKey % size;
}



class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for(let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  add(key, value) {
    let index = hash(key, this.size);
    this.buckets[index].set(key,value);
  }

  get(key){
    if(key){
      let index = hash(key, this.size);
      let get = this.buckets[index].get(key);
      return get;
    } else{
      return null;
    }
  }

  contains(key) {
    let index = hash(key, this.size);
    return this.buckets[index].has(key);
  }

  hash(key) {
    let index = hash(key, this.size);
    return this.buckets[index]
  }
}

const table = new HashTable();

table.add('avrey', '1')


module.exports = {HashTable, hash};


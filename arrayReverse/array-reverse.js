'use strict'

let arr = [1,2,3];
const newArr = [];

function reverseArray(arr) {

  for(let i = -arr.length; i < arr.length; i++) {
    newArr.push(arr.pop(i));
  }

  return newArr;
}

reverseArray(arr);

console.log(newArr)

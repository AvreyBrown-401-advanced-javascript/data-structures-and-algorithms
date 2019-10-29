let arr = [1,2,3];

function reverseArray() {

  const newArr = [];
  for(let i = -arr.length; i < arr.length; i++) {
    newArr.push(arr.pop(i));
  }

  return newArr;
}

reverseArray();

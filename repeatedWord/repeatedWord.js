
function repeatedWord(string) {
  let storageArr = [];
  let spaceArr = [];
  for(let i = 0; i < string.length; i++) {
    if(i = ' ') {
      spaceArr.push(i);
    }
  }
  return {spaceArr, storageArr};
}

console.log(repeatedWord('strings are cool strings'))

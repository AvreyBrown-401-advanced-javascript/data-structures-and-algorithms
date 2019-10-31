
'use strict';
// let multiBracket = function (str) {
//   let stack = [];
//   let pairs = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   }

//   str.split('').filter(char => '{}()[]'.includes(char)).join('');

//   // const regex = /[a-z]+/g;
//   // str.replace(regex, ' ');
//   for (let i = 0; i < str.length; i++) {

//     if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//       stack.push(str[i]);
//     } else {
//       let last = stack.pop();
//       if (str[i] !== pairs[last]) {return false};
//     }
//   }
//   if (stack.length !== 0) {return false}
//   return true;
// }

// function validateBracket(str) {
// }





// function validateBracket(str) {
//   const bracketStr = str.split('').filter(char => '{}()[]'.includes(char)).join('');

//   const stack = [];

//   for(let char of bracketStr) {
//     if('{(['.includes(char)) {
//       stack.push(char);
//     } else {
//       const popped = stack.pop();
//       console.log(popped);
//     }
//   }
//   return stack.length === 0;
// }

let multiBracket = function (str) {
  let stack = [];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const bracketStr = str.split('').filter(char => '{}()[]'.includes(char)).join('');

  for (let char of bracketStr) {

    if ('{(['.includes(char) ) {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (popped !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


console.log(multiBracket('()[[Extra Characters]]'))


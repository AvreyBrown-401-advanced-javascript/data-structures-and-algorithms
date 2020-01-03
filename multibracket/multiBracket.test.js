'use strict';

require('./multiBracket');

let multiBracket = function (str) {
  let array = [];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {

    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      array.push(str[i]);
    } else {
      let last = array.pop();
      if (str[i] !== pairs[last]) {return false}
    }
  }
  if (array.length !== 0) {return false}
  return true;
}

describe('the strings will return true if the brackets all have a match ', () => {
  it('will return true beacuse all of the brakets ar matched', () => {
    expect(multiBracket('{}')).toBeTruthy();
  })
});

describe('the strings will return true if the brackets all have a match ', () => {
  it('will return true beacuse all of the brakets ar matched', () => {
    expect(multiBracket('{}(){}')).toBeTruthy();
  })
});

// describe('the strings will return true if the brackets all have a match ', () => {
//   it('will return true beacuse all of the brakets ar matched', () => {
//     expect(multiBracket('()[[Extra Characters]]')).toBeTruthy();
//   })
// });

describe('the strings will return true if the brackets all have a match ', () => {
  it('will return true beacuse all of the brakets ar matched', () => {
    expect(multiBracket('()')).toBeTruthy();
  })
});

describe('the strings will return true if the brackets all have a match ', () => {
  it('will return true beacuse all of the brakets ar matched', () => {
    expect(multiBracket('()')).toBeTruthy();
  })
});

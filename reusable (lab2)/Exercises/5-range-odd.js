'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
  let arr = [];
  let i = start;
  if(i %2 === 0){
    i++;
  }
  for(;i <= end; i+=2){
    arr.push(i);
  };
  return arr;
};

module.exports = { rangeOdd };

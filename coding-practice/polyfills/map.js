//Polyfill for Map
//Syntax : array.map((item, index, array) => {})

const numsArray = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callbackFn) {
  let mapResult = [];

  for (let index = 0; index < this.length; index++) {
    mapResult.push(callbackFn(this[index], index));
  }

  return mapResult;
};

const numResult = numsArray.map((num, index) => num + index);
const myMapResult = numsArray.myMap((num, index) => num ** index);

console.log("myMapResult", myMapResult);
console.log("numResult", numResult);

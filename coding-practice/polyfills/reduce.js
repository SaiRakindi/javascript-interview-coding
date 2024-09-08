//Polyfill for reduce()
//Syntax : array.reduce((accumulator, currentValue, index, arr) => {}, initialValue)

Array.prototype.myReduce = function (callbackFn, initialValue) {
  var accumulator = initialValue;

  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? callbackFn(accumulator, this[index], index, this)
      : this[index];
  }

  return accumulator;
};

const numsArray = [1, 2, 3, 4, 5, 6];

const myReduceResult = numsArray.myReduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(myReduceResult);

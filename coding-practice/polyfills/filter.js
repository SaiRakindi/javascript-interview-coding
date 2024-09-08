//Polyfill for Filter
//Syntax : array.filter((item, index, array) => {})

Array.prototype.myFilter = function (callbackFn) {
  const filterResult = [];

  for (let index = 0; index < this.length; index++) {
    if (callbackFn(this[index], index)) filterResult.push(this[index]);
  }

  return filterResult;
};

const numbers = [1, 3, 4, 2, 56, 7, 8, 9];

const customFilterResults = numbers.myFilter((num, index) => num % 2 === 0);

console.log(customFilterResults);

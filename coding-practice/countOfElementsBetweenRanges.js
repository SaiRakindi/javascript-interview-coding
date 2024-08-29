let arr = [1, 3, 5, 2];
const range1 = 1;
const range2 = 5;
//Output: 4

const countOfElementsBetweenRange = arr.reduce((accumulator, currentValue) => {
  if (currentValue >= range1 && currentValue <= range2) accumulator++;

  return accumulator;
}, 0);

console.log(countOfElementsBetweenRange);

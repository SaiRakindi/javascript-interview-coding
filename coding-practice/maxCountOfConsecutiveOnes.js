const maxCountOfConsecutiveOnes = (arr) => {
  return arr.reduce((acc, currentValue, i) => {
    if (currentValue === 1 && arr[i + 1] === 1) ++acc;

    return acc;
  }, 0);
};

console.log(
  maxCountOfConsecutiveOnes([1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1])
);

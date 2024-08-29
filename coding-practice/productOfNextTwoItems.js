const nextTwoItemsProduct = (arr) => {
  return arr.reduce((acc, _, index) => {
    index < arr.length
      ? acc.push(arr[index + 1] * arr[index + 2])
      : acc.push(arr[index - 1] * arr[index - 2]);

    return acc;
  }, []);
};

const nums = [3, 4, 5]; //output: [20, 15, 12];
console.log(nextTwoItemsProduct(nums));

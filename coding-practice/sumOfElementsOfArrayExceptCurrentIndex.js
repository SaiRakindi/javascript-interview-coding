let nums = [1, 2, 3, 4];

function multiplicationArray(arr, index) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) result *= arr[i];
  }
  return result;
}

const sumOfElementsExceptCurrentIndex = nums.reduce((accumulator, _, index) => {
  accumulator.push(multiplicationArray(nums, index));
  return accumulator;
}, []);

console.log(sumOfElementsExceptCurrentIndex); // [24, 12, 8, 6]

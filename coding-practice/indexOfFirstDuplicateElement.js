const nums = [1, 2, 10, 8, 4, 5, 8, 7, 6, 9];

const getFirstDuplicateElementIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (nums.lastIndexOf(arr[i]) !== i) return i;
  }
  return -1;
};

console.log(getFirstDuplicateElementIndex(nums));

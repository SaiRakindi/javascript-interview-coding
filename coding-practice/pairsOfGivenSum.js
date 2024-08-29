function getPairs(arr, total) {
  const sumElementsPairs = [];
  const setValues = new Set();

  for (const num of arr) {
    let value = total - num;

    if (setValues.has(value)) {
      sumElementsPairs.push([value, num]);
    }
    setValues.add(num);
  }

  return sumElementsPairs;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = 10;

console.log(getPairs(nums, sum));

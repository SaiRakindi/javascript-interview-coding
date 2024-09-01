let arr = [
  [1, 2],
  [3, 4, 5],
  [5, 6, 7, 8, 9, [10, [11]]],
  [20, 21],
  [21, [22, [25, [27]]]],
];

const oneLevelOfFlattening = [].concat(...arr);

const flatUsingArrayFunctionFlat = arr.flat(2);

function customFlat(arr, depth = 1) {
  let result = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...customFlat(item, depth - 1));
    } else result.push(item);
  });

  return result;
}

console.log(customFlat(arr, 4));

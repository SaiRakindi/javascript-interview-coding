let arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, [10, 11, [22]]]]]];

let flatArray = [];

const flattenArr = (nestedArray) => {
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      return flattenArr(nestedArray[i]);
    } else {
      flatArray.push(nestedArray[i]);
    }
  }

  return flatArray;
};

const flatArrayUsingReduce = (nestedArray) => {
  return nestedArray.reduce((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      acc.push(...flatArrayUsingReduce(currentValue));
    } else {
      acc.push(currentValue);
    }
    return acc;
  }, []);
};

console.log(flattenArr(arr));
console.log(flatArrayUsingReduce(arr));

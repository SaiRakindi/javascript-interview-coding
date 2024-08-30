const removeDuplicates = (arr) => {
  // Type 1
  //   return arr.reduce((acc, currentValue, index) => {
  //     if (arr.lastIndexOf(currentValue) === index) acc.push(currentValue);
  //     return acc.sort();
  //   }, []);

  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) == -1) {
      uniqueElements.push(arr[i]);
    }
  }

  return uniqueElements;
};

console.log(removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));
console.log(removeDuplicates([1, 2, 1, 3, 4, 5, 6, 8, 4, 2, 2, 1, 5, 6]));

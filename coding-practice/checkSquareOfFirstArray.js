const hasMatchingSquares = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) return false;
  }

  return true;
};

console.log(hasMatchingSquares([1, 2, 5], [1, 4, 25]));
console.log(hasMatchingSquares([1, 2, 3], [4, 1, 9]));
console.log(hasMatchingSquares([1, 2, 3], [1, 9]));
console.log(hasMatchingSquares([1, 2, 1], [1, 4, 1]));

// [1,2,3],[4,1,9] ==> true
// [1,2,3],[1,9] ====> false
// [1,2,1],[4,4,1] ===> false (must be same frequency)

function containsDuplicate(arr) {
  //   Best approach
  let arrSet = new Set();
  for (let num of arr.sort()) {
    if (arrSet.has(num)) {
      return true;
    }
    arrSet.add(num);
  }
  return false;

  //   let uniqueArr = [];
  //   let duplicateArr = [];
  //   for (let num of arr) {
  //     if (uniqueArr.includes(num)) {
  //       duplicateArr.push(num);
  //     }
  //     uniqueArr.push(num);
  //   }
  //   return [...new Set(duplicateArr)];
  //   Brute force - Normal approach
  //   let sortedArr = arr.sort();
  //   for (let i = 0; i <= sortedArr.length; i++) {
  //     if (arr[i] === arr[i + 1]) return true;
  //     return false;
  //   }
}

console.log(containsDuplicate([1, 2, 3, 4, 5]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 2, 4, 5, 4]));

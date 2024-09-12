Array.prototype.myFlat = function (depth = 1) {
  return this.reduce((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      acc.push(...currentValue.myFlat());
    } else acc.push(currentValue);
    return acc;
  }, []);
};

const nestedArray = [1, 2, [3, 4, [5], [6, [7, [8]]]]];

const flatResult = nestedArray.myFlat();
console.log(flatResult);

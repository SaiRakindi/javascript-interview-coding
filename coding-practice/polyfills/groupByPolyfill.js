const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

Object.groupByPolyfill = (arr, groupType) => {
  return arr.reduce((accumulator, currentValue) => {
    const type = groupType(currentValue);
    if (!accumulator[type]) {
      accumulator[type] = [];
    }
    accumulator[type].push(currentValue);

    return accumulator;
  }, {});
};

console.log(Object.groupByPolyfill(inventory, (item) => item.type));

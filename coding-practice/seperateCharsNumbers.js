const mixedValues = [1, 2, "a", "b", "string", 4, 5];

const seperatedArray = mixedValues.reduce(
  (acc, currentValue) => {
    if (typeof currentValue === "string") acc[0].push(currentValue);
    else acc[1].push(currentValue);

    return acc;
  },

  [[], []]
);

console.log(seperatedArray);

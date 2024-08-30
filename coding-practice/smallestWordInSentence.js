const smallestWord = (inputString) => {
  let splittedString = inputString.split(" ");

  return splittedString.reduce((acc, currentValue) => {
    if (currentValue.length < acc.length) acc = currentValue;

    return acc;
  }, splittedString[0]);
};

console.log(smallestWord("The quick brown"));
console.log(smallestWord("Hello a test"));

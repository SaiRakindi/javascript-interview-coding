const stringReverse = (inputString) => {
  //   using reduce method
  //   return inputString.split("").reduce((acc, currentValue) => {
  //     return (currentValue += acc);
  //   }, "");

  let stringReversal = "";

  for (let i = inputString.length - 1; i >= 0; i--)
    stringReversal += inputString[i];

  return stringReversal;
};

console.log(stringReverse("Hi! I'm Sai Rakindi!"));

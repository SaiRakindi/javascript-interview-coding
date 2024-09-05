function pangramChecker(inputString) {
  let numArray = new Array(26).fill(false);

  let index;

  for (let i = 0; i <= inputString.length; i++) {
    if (inputString[i] >= "A" && inputString[i] <= "Z") {
      index = inputString.charCodeAt(i) - "A".charCodeAt(0);
    } else if (inputString[i] >= "a" && inputString[i] <= "z") {
      index = inputString.charCodeAt(i) - "a".charCodeAt(0);
    } else continue;

    numArray[index] = true;
  }

  const isPangram = numArray.every((num) => num === true);

  return isPangram;
}

function pangramChecker2(inputString) {
  if (typeof inputString !== "string") return false;

  const result = new Set();

  for (const char of inputString.toUpperCase()) {
    if (/[A-Z]/.test(char)) result.add(char);
  }

  return result.size === 26;
}

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));
console.log(pangramChecker("Waltz, bad nymph, for quick jigs vex."));
console.log(pangramChecker("The five boxing wizards jump quickly."));
console.log(pangramChecker("The boxing wizards jump quickly."));
console.log(pangramChecker(12356));

console.log(pangramChecker2("The quick brown fox jumps over the lazy dog"));
console.log(pangramChecker2("Waltz, bad nymph, for quick jigs vex."));
console.log(pangramChecker2("The five boxing wizards jump quickly."));
console.log(pangramChecker2("The boxing wizards jump quickly."));
console.log(pangramChecker2(12356));

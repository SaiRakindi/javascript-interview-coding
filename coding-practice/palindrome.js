function palindrome(inputString) {
  // solution using inbuilt functions
  //   return inputString.split("").reverse().join("") === inputString;

  //another appraoch
  let stringLength = inputString.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (inputString[i] !== inputString[stringLength - i - 1]) {
      return false;
    }
  }

  return true;

  //brute force solution
  //   let palindromeCheck = "";
  //   for (let index = inputString.length - 1; index >= 0; index--) {
  //     palindromeCheck += inputString[index];
  //   }
  //   return palindromeCheck === inputString;
}

console.log(palindrome("madam"));
console.log(palindrome("madamimadam"));
console.log(palindrome("sai"));

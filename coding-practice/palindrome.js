function palindrome(inputString) {
  // solution using inbuilt functions
  //   return inputString.split("").reverse().join("") === inputString;

  //brute force solution
  let palindromeCheck = "";

  for (let index = inputString.length - 1; index >= 0; index--) {
    palindromeCheck += inputString[index];
  }

  return palindromeCheck === inputString;
}

console.log(palindrome("madam"));
console.log(palindrome("sai"));

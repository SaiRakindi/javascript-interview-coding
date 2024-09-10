function palindrome(inputString) {
  return inputString.split("").reverse().join("") === inputString;
}

console.log(palindrome("madam"));
console.log(palindrome("sai"));

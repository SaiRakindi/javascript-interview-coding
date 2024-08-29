let str = "abcdef";
let str1 = 123;

let str2 = 123456;
let str3 = "abc";

function stringConcat(input1, input2) {
  input1 = input1.toString();
  input2 = input2.toString();

  let length1 = input1.length;
  let length2 = input2.length;

  let maxLength = length1 > length2 ? length1 : length2;

  let resultString = "";
  for (let i = 0; i < maxLength; i++) {
    if (i < length1) resultString += input1[i];
    if (i < length2) resultString += input2[i];
  }

  return resultString;
}

console.log(stringConcat(str, str1));
console.log(stringConcat(str2, str3));
